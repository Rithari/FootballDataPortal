import { Grid, _ } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const GameListTable = (): JSX.Element => {
  const apiURL = import.meta.env.REACT_APP_API_URL || "http://localhost:3000";
  const navigate = useNavigate();

  const columns = [
    {
      name: "gameId",
      hidden: true,
    },
    "Home Club",
    "Away Club",
    "Score",
    "Date",
    "Stadium",
    "Attendance",
    {
      name: "Actions",
      formatter: (_cell: number, row: any) =>
        _(
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault(); // Prevent the default anchor action
              navigate(`/game/${row.cells[0].data}`);
            }}
            className="view-link"
          >
            View
          </a>
        ),
    },
  ];

  return (
    <div className="gridjs-container">
      <Grid
        server={{
          url: `${apiURL}/api/games`,
          then: (response: any) => {
            if (response && Array.isArray(response.data)) {
              return response.data.map((game: any) => [
                game.game_id,
                game.home_club_name,
                game.away_club_name,
                `${game.home_club_goals} - ${game.away_club_goals}`,
                new Date(game.date).toLocaleDateString(),
                game.stadium,
                game.attendance,
                null, // Placeholder for the 'View' button
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
