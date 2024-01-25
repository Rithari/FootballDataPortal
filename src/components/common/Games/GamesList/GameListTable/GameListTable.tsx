import React from "react";
import { Grid, _ } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import { fetchAllGames } from "../../../../../api/games-api";
import "./style.css";

export const GameListTable = (): JSX.Element => {
  const fetchData = () => {
    return new Promise(async (resolve) => {
      try {
        const gamesData = await fetchAllGames();
        const transformedData = gamesData.map((game: any) => [
          game.home_club_name,
          game.away_club_name,
          `${game.home_club_goals} - ${game.away_club_goals}`, // Display score as "home_goals - away_goals"
          new Date(game.date).toLocaleDateString(), // Format date
          game.stadium,
          game.attendance,
          game.home_club_manager_name,
          game.away_club_manager_name,
          game.referee,
          game.round,
          game.season,
          game.aggregate,
          game.competition_type,
          game.outcome,
        ]);
        resolve(transformedData);
      } catch (error) {
        console.error("Failed to fetch games:", error);
        resolve([]); // Resolve with an empty array in case of an error
      }
    });
  };

  interface Game {
    home_club_name: string;
    away_club_name: string;
    home_club_goals: number;
    away_club_goals: number;
    date: string;
    stadium: string;
    attendance: number;
  }

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
          then: (data: Game[]) =>
            data.map((game) => [
              game.home_club_name,
              game.away_club_name,
              `${game.home_club_goals} - ${game.away_club_goals}`,
              new Date(game.date).toLocaleDateString(),
              game.stadium,
              game.attendance,
            ]),
          total: (responseData: { total: number }) => responseData.total,
        }}
        columns={columns}
        search={{ enabled: true }}
        sort={true}
        pagination={{
          enabled: true,
          limit: 10,
          server: {
            url: (prevUrl: any, page: any, limit: any) =>
              `${prevUrl}?page=${page + 1}&limit=${limit}`,
          },
        }}
        className="gridjs-table"
      />
    </div>
  );
};
