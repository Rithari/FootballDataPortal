import React from "react";
import { Grid, _ } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import { fetchAllClubs } from "../../../../../api/clubs-api";
import "./style.css";

export const ClubListTable = (): JSX.Element => {
  const fetchData = () => {
    return new Promise(async (resolve) => {
      try {
        const clubsData = await fetchAllClubs();
        const transformedData = clubsData.map((club: any) => [
          _(<a href={`/club/${club.clubId}`}>{club.name}</a>),
          club.squadSize,
          club.averageAge,
          club.stadiumName,
          club.stadiumSeats,
        ]);
        resolve(transformedData);
      } catch (error) {
        console.error("Failed to fetch clubs:", error);
        resolve([]);
      }
    });
  };

  const columns = [
    "Club Name",
    "Squad Size",
    "Average Age",
    "Stadium",
    "Stadium Seats",
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
