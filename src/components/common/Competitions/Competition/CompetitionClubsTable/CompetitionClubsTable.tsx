import { Grid, _ } from "gridjs-react";
import { useParams, useNavigate } from "react-router-dom";
import "gridjs/dist/theme/mermaid.css";
import { fetchClubsByCompetition } from "../../../../../api/clubs-api";
import "./style.css";

export const CompetitionClubsTable = (): JSX.Element => {
  const { id: competitionId } = useParams();
  const navigate = useNavigate();

  const fetchData = () => {
    return new Promise(async (resolve) => {
      try {
        const clubsData = await fetchClubsByCompetition(competitionId || "");
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
        resolve([]); // Resolve with empty array in case of error
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
      <h2 className="table-heading">Clubs</h2>
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
