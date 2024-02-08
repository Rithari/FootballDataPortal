import { Grid, _ } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const GameListTable = (): JSX.Element => {
  const apiURL = import.meta.env.REACT_APP_API_URL || "http://localhost:3000";
  const navigate = useNavigate();

  const columnNames = [
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

  // Function to build URL with proper query parameters
  const buildUrl = (
    prevUrl: any,
    page: any,
    limit: any,
    keyword: any,
    sort?: any
  ) => {
    const url = new URL(prevUrl, window.location.origin);
    url.searchParams.set("page", page);
    url.searchParams.set("limit", limit);
    if (keyword) {
      url.searchParams.set("searchQuery", keyword);
    }
    if (sort && sort.length > 0) {
      const col = sort[1];
      const dir = col.direction === 1 ? "asc" : "desc";
      const colName = "home_club_name";
      url.searchParams.set("sort", `${colName},${dir}`);
    }
    return url.toString();
  };

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
        columns={columnNames}
        search={{
          enabled: true,
          server: {
            url: (prev: any, keyword: any) => buildUrl(prev, 1, 10, keyword),
          },
        }}
        sort={{
          enabled: false,
        }}
        pagination={{
          enabled: true,
          limit: 10,
          server: {
            url: (prevUrl: any, page: any, limit: any) =>
              buildUrl(prevUrl, page, limit, null),
          },
        }}
        className="gridjs-table"
      />
    </div>
  );
};
