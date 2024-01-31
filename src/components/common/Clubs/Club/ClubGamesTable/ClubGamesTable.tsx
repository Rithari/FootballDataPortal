import { Grid, _ } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import "./style.css";
import { useNavigate, useParams } from "react-router-dom";

export const ClubGamesTable = (): JSX.Element => {
  const navigate = useNavigate();
  const { id: clubId } = useParams();
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

  console.log("clubId", clubId);

  return (
    <div className="gridjs-container">
      <h2 className="table-heading">Club Games</h2>
      <Grid
        server={{
          url: "http://localhost:3000/api/games/club/" + clubId,
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
