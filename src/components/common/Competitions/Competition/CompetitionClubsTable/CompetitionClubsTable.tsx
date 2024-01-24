import React, { useEffect, useState } from "react";
import { Grid, _ } from "gridjs-react";
import { useParams } from "react-router-dom";
import "gridjs/dist/theme/mermaid.css";
import { fetchClubsByCompetition } from "../../../../../api/clubs-api";
import "./style.css";

export const CompetitionClubsTable = (): JSX.Element => {
  const [clubs, setClubs] = useState<
    {
      clubId: number;
      clubName: string;
      averageAge: number;
      stadium: string;
      stadiumSeats: number;
      squadSize: number;
    }[]
  >([]);

  const [isLoading, setIsLoading] = useState(false);

  const { id: competitionId } = useParams();

  useEffect(() => {
    const getClubs = async () => {
      setIsLoading(true);
      try {
        const clubsData = await fetchClubsByCompetition(competitionId || "");
        const transformedData = clubsData.map((club: any) => ({
          clubId: club.clubId,
          clubName: [club.clubId, club.name],
          averageAge: club.averageAge,
          stadium: club.stadiumName,
          stadiumSeats: club.stadiumSeats,
          squadSize: club.squadSize,
        }));
        setClubs(transformedData);
      } catch (error) {
        console.error("Failed to fetch clubs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getClubs();
  }, [competitionId]);

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

  const columns = [
    {
      name: "Club Name",
      formatter: (cell: [number, string]) =>
        _(<a href={`/club/${cell[0]}`}>{cell[1]}</a>),
    },
    "Squad Size",
    "Average Age",
    "Stadium",
    "Stadium Seats",
  ];

  // Transform players data into the format expected by Grid.js
  const gridData = clubs.map((club) => [
    club.clubName,
    club.squadSize,
    club.averageAge,
    club.stadium,
    club.stadiumSeats,
  ]);

  if (isLoading) {
    return <div className="loading-text">Loading Clubs...</div>;
  }

  return (
    <div className="gridjs-container">
      <Grid
        data={gridData}
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
