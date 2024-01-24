import { Grid, _ } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import { fetchAllPlayers } from "../../../../../api/players-api";
import "./style.css";

export const PlayerListTable = (): JSX.Element => {
  const fetchData = () => {
    return new Promise(async (resolve) => {
      try {
        const playersData = await fetchAllPlayers();
        const transformedData = playersData.map((player: any) => [
          _(<a href={`/player/${player.playerId}`}>{player.name}</a>),
          player.position,
          player.age,
          _(
            <a href={`/club/${player.currentClubId}`}>
              {player.currentClubName}
            </a>
          ),
          player.marketValueInEur ? `${player.marketValueInEur}` : "N/A",
        ]);
        resolve(transformedData);
      } catch (error) {
        console.error("Failed to fetch players:", error);
        resolve([]);
      }
    });
  };

  const columns = [
    "Name",
    "Position",
    "Age",
    "Club",
    {
      name: "Market Value",
      formatter: (cell: string) => {
        // Handle "N/A" values
        if (cell === "N/A") return cell;

        // Convert the string to a number for formatting
        const value = parseFloat(cell);
        // Format the number into a more readable format
        if (value >= 1_000_000) {
          return `${(value / 1_000_000).toFixed(2)}M €`;
        } else if (value >= 1_000) {
          return `${(value / 1_000).toFixed(2)}K €`;
        } else {
          return `${value.toFixed(2)} €`;
        }
      },
      sort: {
        compare: (a: string, b: string) => {
          // Handle "N/A" as 0
          const valueA = a === "N/A" ? 0 : parseFloat(a.replace(/[€MK]/g, ""));
          const valueB = b === "N/A" ? 0 : parseFloat(b.replace(/[€MK]/g, ""));

          // Convert 'M' and 'K' values to their numeric equivalents for comparison
          const numA = a.includes("M")
            ? valueA * 1_000_000
            : a.includes("K")
            ? valueA * 1_000
            : valueA;
          const numB = b.includes("M")
            ? valueB * 1_000_000
            : b.includes("K")
            ? valueB * 1_000
            : valueB;

          return numA - numB;
        },
      },
    },
  ];

  return (
    <div className="gridjs-container">
      <Grid
        data={fetchData}
        columns={columns}
        search={true}
        sort={true}
        pagination={{
          limit: 25,
        }}
        className="gridjs-table"
      />
    </div>
  );
};
