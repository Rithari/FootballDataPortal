import React, { useEffect, useState } from "react";
import { Grid, _ } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import { fetchAllClubs } from "../../../../../api/clubs-api";
import "./style.css";

// Mock response data
const mockClubs = [
  {
    clubName: "FC Barcelona",
    coach: "Ronald Koeman",
    stadium: "Camp Nou",
    stadiumSeats: 99354,
    marketValue: "$4.06 billion",
  },
  {
    clubName: "Real Madrid",
    coach: "Carlo Ancelotti",
    stadium: "Santiago Bernabeu",
    stadiumSeats: 81044,
    marketValue: "$4.24 billion",
  },
];

export const ClubListTable = (): JSX.Element => {
  const [clubs, setClubs] = useState<
    {
      clubName: string;
      coach: string;
      stadium: string;
      stadiumSeats: number;
      marketValue: string;
    }[]
  >([]);

  useEffect(() => {
    // Simulate API call with mock response data
    setClubs(mockClubs);
  }, []);

  const columns = [
    {
      name: "Club Name",
      formatter: (cell: string) =>
        _(
          // Use the _ function to render JSX
          <a href={`/club/${cell.replace(/\s+/g, "-").toLowerCase()}`}>
            {cell}
          </a>
        ),
    },
    "Coach",
    "Stadium",
    "Stadium Seats",
    "Market Value",
  ];

  // Transform players data into the format expected by Grid.js
  const gridData = clubs.map((club) => [
    club.clubName,
    club.coach,
    club.stadium,
    club.stadiumSeats,
    club.marketValue,
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
