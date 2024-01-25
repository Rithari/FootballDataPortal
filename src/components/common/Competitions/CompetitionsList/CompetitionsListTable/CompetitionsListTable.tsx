import { Grid, _ } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import { fetchAllCompetitions } from "../../../../../api/competitions-api";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const CompetitionsListTable = (): JSX.Element => {
  const navigate = useNavigate();

  const fetchData = () => {
    return new Promise(async (resolve) => {
      try {
        const competitionsData = await fetchAllCompetitions();
        const transformedData = competitionsData.map((competition: any) => [
          competition.competition.competitionId,
          competition.competition.name,
          competition.competition.countryName,
          competition.clubCount,
          competition.totalNumberOfPlayers,
          competition.totalMarketValue
            ? `${competition.totalMarketValue}`
            : "N/A",
        ]);
        resolve(transformedData);
      } catch (error) {
        console.error("Failed to fetch competitions:", error);
        resolve([]);
      }
    });
  };

  const columns = [
    {
      name: "competitionId",
      hidden: true,
    },
    {
      name: "Competition",
      formatter: (cell: string, row: any) => {
        const competitionId = row.cells[0].data;
        return _(
          <a
            href={`/competition/${competitionId}`}
            onClick={(e) => {
              e.preventDefault();
              navigate(`/competition/${competitionId}`);
            }}
          >
            {cell}
          </a>
        );
      },
    },
    "Country",
    "Clubs",
    "Players",
    {
      name: "Total Value",
      formatter: (cell: string) => {
        // Handle "N/A" values
        if (cell === "N/A") return cell;

        // Convert the string to a number for formatting
        const value = parseFloat(cell);
        // Format the number into a more readable format
        if (value >= 1_000_000_000) {
          return `${(value / 1_000_000_000).toFixed(2)}B €`;
        } else if (value >= 1_000_000) {
          return `${(value / 1_000_000).toFixed(2)}M €`;
        } else if (value >= 1_000) {
          return `${(value / 1_000).toFixed(2)}K €`;
        } else {
          return `${value.toFixed(2)} €`;
        }
      },
      sort: {
        compare: (a: string, b: string): number => {
          const units: Record<string, number> = { B: 1e9, M: 1e6, K: 1e3 };
          const parseValue = (val: string): number => {
            if (val === "N/A") return -Infinity; // Return -Infinity for "N/A" so it's sorted last
            let numericValue: number = parseFloat(val.replace(/[^\d.-]/g, ""));
            Object.keys(units).forEach((unit: string) => {
              if (val.includes(unit)) {
                numericValue *= units[unit];
              }
            });
            return Math.round(numericValue);
          };

          const numA: number = parseValue(a);
          const numB: number = parseValue(b);

          // Ensure "N/A" is always sorted last
          if (numA === -Infinity && numB === -Infinity) return 0;
          if (numA === -Infinity) return 1;
          if (numB === -Infinity) return -1;

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
          limit: 10,
        }}
        className="gridjs-table"
      />
    </div>
  );
};
