import { useEffect, useState } from "react";
import { Grid, _ } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import { fetchAllCompetitions } from "../../../../../api/competitions-api";
import "./style.css";

export const CompetitionsListTable = (): JSX.Element => {
  const [competitions, setCompetitions] = useState<
    {
      competitionId: string;
      competition: string;
      country: string;
      clubs: number;
      players: number;
      totalMarketValue: string;
    }[]
  >([]);

  const searchSelector = (cell: any, rowIndex: number, cellIndex: number) => {
    // Check if the cell data is an array, and the column is either Competition or Club Name
    if (
      Array.isArray(cell) &&
      cellIndex === 0 /* assuming the first column is for names */
    ) {
      // Return the name part (second element of the array) for searching
      return cell[1];
    }
    // For other columns, return the cell data as is
    return cell;
  };

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCompetitions = async () => {
      setIsLoading(true);
      try {
        const competitionsData = await fetchAllCompetitions();
        const transformedData = competitionsData.map((competition: any) => ({
          competitionId: competition.competition.competitionId,
          competition: [
            competition.competition.competitionId,
            competition.competition.name,
          ],
          country: competition.competition.countryName,
          clubs: competition.clubCount,
          players: competition.totalNumberOfPlayers,
          totalMarketValue: competition.totalMarketValue
            ? `${competition.totalMarketValue}`
            : "N/A",
        }));
        setCompetitions(transformedData);
      } catch (error) {
        console.error("Failed to fetch competitions:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getCompetitions();
  }, []);

  const columns = [
    {
      name: "Competition",
      formatter: (cell: [string, string]) =>
        _(<a href={`/competition/${cell[0]}`}>{cell[1]}</a>),
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

  // Transform players data into the format expected by Grid.js
  const gridData = competitions.map((competition) => [
    competition.competition,
    competition.country,
    competition.clubs,
    competition.players,
    competition.totalMarketValue,
  ]);

  if (isLoading) {
    return <div className="loading-text">Loading competitions...</div>;
  }

  return (
    <div className="gridjs-container">
      <Grid
        data={gridData}
        columns={columns}
        search={{ enabled: true, selector: searchSelector }}
        sort={true}
        pagination={{
          limit: 10, // You can adjust the limit as needed
        }}
        className="gridjs-table"
      />
    </div>
  );
};
