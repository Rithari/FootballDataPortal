import React, { useEffect, useState } from "react";
import { Grid, _ } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import { fetchAllPlayers } from "../../../../../api/players-api";
import "./style.css";

// Mock response data
const mockPlayers = [
  {
    name: "John Doe",
    role: "Forward",
    age: 25,
    club: "FC Barcelona",
    marketValue: "$50 million",
  },
  {
    name: "Jane Smith",
    role: "Midfielder",
    age: 28,
    club: "Real Madrid",
    marketValue: "$40 million",
  },
];

export const PlayerListTable = (): JSX.Element => {
  const [players, setPlayers] = useState<
    {
      name: string;
      role: string;
      age: number;
      club: string;
      marketValue: string;
    }[]
  >([]);

  useEffect(() => {
    // Simulate API call with mock response data
    setPlayers(mockPlayers);
  }, []);

  const columns = [
    {
      name: "Name",
      formatter: (cell: string) =>
        _(
          // Use the _ function to render JSX
          <a href={`/player/${cell.replace(/\s+/g, "-").toLowerCase()}`}>
            {cell}
          </a>
        ),
    },
    "Role",
    "Age",
    {
      name: "Club",
      formatter: (cell: string) =>
        _(
          // Use the _ function to render JSX
          <a href={`/club/${cell.replace(/\s+/g, "-").toLowerCase()}`}>
            {cell}
          </a>
        ),
    },
    "Market Value",
  ];

  // Transform players data into the format expected by Grid.js
  const gridData = players.map((player) => [
    player.name,
    player.role,
    player.age,
    player.club,
    player.marketValue,
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
