import React, { useEffect, useState } from "react";
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
      totalValue: string;
    }[]
  >([]);

  const searchSelector = (cell: any, rowIndex: number, cellIndex: number) => {
    // Check if the cell data is an array (for name and club columns)
    if (Array.isArray(cell)) {
      // Return the name part for searching (second element of the array)
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
          competition: competition.competition.name,
          country: competition.competition.countryName,
          clubs: competition.clubCount,
          players: competition.totalNumberOfPlayers,
          //totalValue: competition.totalValue,
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
      formatter: (cell: string) =>
        _(
          // Use the _ function to render JSX
          <a href={`/competition/${cell.replace(/\s+/g, "-").toLowerCase()}`}>
            {cell}
          </a>
        ),
    },
    "Country",
    "Clubs",
    "Players",
    "Total Value",
  ];

  // Transform players data into the format expected by Grid.js
  const gridData = competitions.map((competition) => [
    competition.competition,
    competition.country,
    competition.clubs,
    competition.players,
    competition.totalValue,
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
        pagination={{
          limit: 10, // You can adjust the limit as needed
        }}
        className="gridjs-table"
      />
    </div>
  );
};
