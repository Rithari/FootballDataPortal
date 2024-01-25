import React from "react";
import { Grid, _ } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import { fetchAllClubs } from "../../../../../api/clubs-api";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const ClubListTable = (): JSX.Element => {
  const navigate = useNavigate();

  const fetchData = () => {
    return new Promise(async (resolve) => {
      try {
        const clubsData = await fetchAllClubs();
        const transformedData = clubsData.map((club: any) => [
          club.clubId,
          club.name,
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
    {
      name: "clubId",
      hidden: true,
    },
    {
      name: "Club Name",
      formatter: (cell: string, row: any) => {
        const clubId = row.cells[0].data;
        return _(
          <a
            href={`/club/${clubId}`}
            onClick={(e) => {
              e.preventDefault();
              navigate(`/club/${clubId}`);
            }}
          >
            {cell}
          </a>
        );
      },
    },
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
