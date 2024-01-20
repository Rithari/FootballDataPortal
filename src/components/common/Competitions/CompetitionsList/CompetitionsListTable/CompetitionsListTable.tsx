import React, { useEffect, useState } from "react";
import { Grid, _ } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import { fetchAllCompetitions } from "../../../../../api/competitions-api";
import "./style.css";

// mock response data
const mockCompetitions = [
  {
    competition: "La Liga",
    country: "Spain",
    clubs: 20,
    players: 500,
    totalValue: "$10 billion",
  },
  {
    competition: "Premier League",
    country: "England",
    clubs: 20,
    players: 50,
    totalValue: "$0",
  },
];

// Needs comeptition, country, clubs, players, total value

export const CompetitionsListTable = (): JSX.Element => {
  const [competitions, setCompetitions] = useState<
    {
      competition: string;
      country: string;
      clubs: number;
      players: number;
      totalValue: string;
    }[]
  >([]);

  useEffect(() => {
    // Simulate API call with mock response data
    setCompetitions(mockCompetitions);
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

  return (
    <div className="gridjs-container">
      <Grid
        data={gridData}
        columns={columns}
        search={true}
        pagination={{
          limit: 10, // You can adjust the limit as needed
        }}
        className="gridjs-table"
      />
    </div>
  );
};
