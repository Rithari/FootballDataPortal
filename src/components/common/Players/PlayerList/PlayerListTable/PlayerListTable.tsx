import React, { useEffect, useState } from "react";
import { Grid, _ } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import { fetchAllPlayers } from "../../../../../api/players-api";
import "./style.css";

export const PlayerListTable = (): JSX.Element => {
  const [players, setPlayers] = useState<
    {
      playerId: number;
      name: string;
      position: string;
      age: number;
      club: string;
      marketValue: string;
    }[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  const calculateAge = (dateOfBirth: any) => {
    const birthDate = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const searchSelector = (cell: any, rowIndex: number, cellIndex: number) => {
    // Check if the cell data is an array (for name and club columns)
    if (Array.isArray(cell)) {
      // Return the name part for searching (second element of the array)
      return cell[1];
    }
    // For other columns, return the cell data as is
    return cell;
  };

  useEffect(() => {
    const getPlayers = async () => {
      setIsLoading(true);
      try {
        const playersData = await fetchAllPlayers();
        const transformedData = playersData.map((player: any) => ({
          name: [player.playerId, player.name],
          position: player.position,
          age: calculateAge(player.dateOfBirth),
          club: [player.currentClubId, player.currentClubName],
          marketValue: player.marketValueInEur
            ? `€${player.marketValueInEur.toLocaleString()}`
            : "N/A",
        }));
        setPlayers(transformedData);
      } catch (error) {
        console.error("Failed to fetch players:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getPlayers();
  }, []);

  const columns = [
    {
      name: "Name",
      formatter: (cell: [number, string]) =>
        _(
          // Use the _ function to render JSX
          <a href={`/player/${cell[0]}`}>{cell[1]}</a>
        ),
    },
    "Role",
    "Age",
    {
      name: "Club",
      formatter: (cell: [number, string]) =>
        _(
          // Use the _ function to render JSX
          <a href={`/club/${cell[0]}`}>{cell[1]}</a>
        ),
    },
    "Market Value",
  ];

  // Transform players data into the format expected by Grid.js
  const gridData = players.map((player) => [
    player.name,
    player.position,
    player.age,
    player.club,
    player.marketValue,
  ]);

  if (isLoading) {
    return <div>Loading players...</div>; // Or a spinner/loader component
  }

  return (
    <div className="gridjs-container">
      <Grid
        data={gridData}
        columns={columns}
        search={{ enabled: true, selector: searchSelector }}
        pagination={{
          limit: 10,
        }}
        className="gridjs-table"
      />
    </div>
  );
};
