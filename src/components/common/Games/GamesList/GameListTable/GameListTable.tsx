import React from "react";
import { Grid, _ } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import "./style.css";

export const GameListTable = (): JSX.Element => {
  const columns = [
    "Home Club",
    "Away Club",
    "Score",
    "Date",
    "Stadium",
    "Attendance",
  ];

  return (
    <div className="gridjs-container">
      <Grid
        server={{
          url: "http://localhost:3000/api/games",
          then: (response: any) => {
            // Check that response.data is present and is an array
            if (response && Array.isArray(response.data)) {
              return response.data.map((game: any) => [
                game.home_club_name,
                game.away_club_name,
                `${game.home_club_goals} - ${game.away_club_goals}`,
                new Date(game.date).toLocaleDateString(),
                game.stadium,
                game.attendance,
              ]);
            }
            throw new Error("Data is not in expected format or not found");
          },
          total: (responseData: any) => responseData.total,
        }}
        columns={columns}
        search={{ enabled: true }}
        sort={{ enabled: true }}
        pagination={{
          enabled: true,
          limit: 10,
          server: {
            url: (prevUrl: any, page: any, limit: any) =>
              `${prevUrl}?page=${page}&limit=${limit}`,
          },
        }}
        className="gridjs-table"
      />
    </div>
  );
};
