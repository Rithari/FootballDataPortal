import React, { useEffect, useState } from "react";
import { Grid, _ } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import { fetchAllClubs } from "../../../../../api/clubs-api";
import "./style.css";

export const ClubListTable = (): JSX.Element => {
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

  useEffect(() => {
    const getClubs = async () => {
      setIsLoading(true);
      try {
        const clubsData = await fetchAllClubs();
        const transformedData = clubsData.map((club: any) => ({
          clubId: club.clubId,
          clubName: club.name,
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
  }, []);

  const searchSelector = (cell: any, rowIndex: number, cellIndex: number) => {
    // Check if the cell data is an array (for name and club columns)
    if (Array.isArray(cell)) {
      // Return the name part for searching (second element of the array)
      return cell[1];
    }
    // For other columns, return the cell data as is
    return cell;
  };

  const columns = [
    {
      name: "Club Name",
      formatter: (cell: string) =>
        _(
          // Use the _ function to render JSX
          <a href={`/club/${cell.replace(/\s+/g, "-").toLowerCase()}`}>
            {cell}
          </a>
        ),
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
        pagination={{
          limit: 10, // You can adjust the limit as needed
        }}
        className="gridjs-table"
      />
    </div>
  );
};
