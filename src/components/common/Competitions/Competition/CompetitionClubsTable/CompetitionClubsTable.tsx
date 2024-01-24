import { Grid, _ } from "gridjs-react";
import { useParams } from "react-router-dom";
import "gridjs/dist/theme/mermaid.css";
import { fetchClubsByCompetition } from "../../../../../api/clubs-api";
import "./style.css";

export const CompetitionClubsTable = (): JSX.Element => {
  const { id: competitionId } = useParams();

  const searchSelector = (cell: any, rowIndex: number, cellIndex: number) => {
    // Check if the cell data is an array, and the column is either Competition or Club Name
    if (
      Array.isArray(cell) &&
      cellIndex === 0 /* assuming the first column is for names */
    ) {
      // Return the name part (second element of the array) for searching
      return cell[1];
    }
    // For other columns, return the cell data as is
    return cell;
  };

  const fetchData = () => {
    return new Promise(async (resolve) => {
      try {
        const clubsData = await fetchClubsByCompetition(competitionId || "");
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
        resolve([]); // Resolve with empty array in case of error
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
        search={{ enabled: true, selector: searchSelector }}
        sort={true}
        pagination={{
          limit: 10,
        }}
        className="gridjs-table"
      />
    </div>
  );
};
