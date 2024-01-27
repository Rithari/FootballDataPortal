import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPlayerById } from "../../../../../api/players-api";
import "./style.css";

export const PlayerInfoHeader = (): JSX.Element => {
  const { id: playerId } = useParams();

  const [player, setPlayer] = useState<{
    playerId: number;
    name: string;
    lastSeason: number;
    dateOfBirth: string;
    currentClubName: string;
    currentClubId: number;
    countryOfBirth: string;
    cityOfBirth: string;
    countryOfCitizenship: string;
    position: string;
    subPosition: string;
    preferredFoot: string;
    heightInCm: number;
    marketValueInEur: number;
    highestMarketValueInEur: number;
    agentName: string;
    contractExpirationDate: Date;
    age: number;
    imageUrl: string;
  } | null>(null);

  // Helper function to format money values
  const formatCurrency = (value: number, currency: string = "EUR") =>
    new Intl.NumberFormat("en-US", { style: "currency", currency }).format(
      value
    );

  useEffect(() => {
    const getPlayer = async () => {
      try {
        const playerData = await fetchPlayerById(playerId || "");
        setPlayer(playerData);
      } catch (error) {
        console.error("Failed to fetch player:", error);
      }
    };

    getPlayer();
  }, [playerId]);

  if (!player) {
    return <div className="player-info-header">Loading...</div>;
  }

  return (
    <div className="player-info-header">
      <div className="content">
        <div
          className="user"
          style={{ backgroundImage: `url(${player.imageUrl})` }}
        />
        <div className="div">
          <div className="column">
            <div className="heading">{player.name}</div>
            <div className="text">
              {player.marketValueInEur &&
                `${formatCurrency(player.marketValueInEur)} Market Value`}
            </div>
            <div className="text">
              <a href={`/club/${player.currentClubId}`}>
                {player.currentClubName}
              </a>
            </div>
          </div>
          <div className="list">
            <div className="content-2">
              <div className="list-item">
                <p className="text-wrapper">Date of birth</p>
                <div className="text-2">
                  {player.dateOfBirth &&
                    `${player.dateOfBirth} (${player.age})`}
                </div>
              </div>
              <div className="list-item">
                <div className="text-wrapper">Height</div>
                <div className="text-2">
                  {player.heightInCm && `${player.heightInCm} cm`}
                </div>
              </div>
            </div>
            <div className="content-2">
              <div className="list-item">
                <div className="text-wrapper">Place of birth</div>
                <div className="text-2">
                  {player.cityOfBirth && `${player.cityOfBirth}, `}
                  {player.countryOfBirth}
                </div>
              </div>
              <div className="list-item">
                <div className="text-wrapper">Position</div>
                <div className="text-2">{player.position}</div>
              </div>
            </div>
            <div className="content-2">
              <div className="list-item-2">
                <div className="text-wrapper">Citizenship</div>
                <div className="text-2">{player.countryOfCitizenship}</div>
              </div>
              <div className="list-item-2">
                <div className="text-wrapper">Agent</div>
                <div className="text-3">{player.agentName}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
