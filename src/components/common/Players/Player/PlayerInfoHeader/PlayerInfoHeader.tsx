import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPlayerById } from "../../../../../api/players-api";
import "./style.css";
import Player from "../../../../../pages/players/Player";

export const PlayerInfoHeader = (): JSX.Element => {
  const { id: playerId } = useParams();

  const [player, setPlayer] = useState<{
    // field : db_field_name
    playerId: number; // player_id
    name: string; // name
    lastSeason: number; // last_season
    dateOfBirth: string; // date_of_birth
    currentClubName: string; // current_club_name
    countryOfBirth: string; // country_of_birth
    cityOfBirth: string; // city_of_birth
    countryOfCitizenship: string; // country_of_citizenship
    position: string; // position
    subPosition: string; // sub_position
    preferredFoot: string; // preferred_foot
    heightInCm: number; // height_in_cm
    marketValueInEur: number; // market_value_in_eur
    highestMarketValueInEur: number; // highest_market_value_in_eur
    agentName: string; // agent_name
    contractExpirationDate: Date; // contract_expiration_date
    age: number; // age
    imageUrl: string; // profile picture | image_url
  } | null>(null);

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

  console.log(player);

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
            <div className="text">€ {player.marketValueInEur} Valuation</div>
            <div className="text">Plays at {player.currentClubName}</div>
          </div>
          <div className="list">
            <div className="content-2">
              <div className="list-item">
                <p className="text-wrapper">Date of birth</p>
                <div className="text-2">
                  {player.dateOfBirth} ({player.age})
                </div>
              </div>
              <div className="list-item">
                <div className="text-wrapper">Height</div>
                <div className="text-2">{player.heightInCm} cm</div>
              </div>
            </div>
            <div className="content-2">
              <div className="list-item">
                <div className="text-wrapper">Place of birth</div>
                <div className="text-2">
                  {player.cityOfBirth}, {player.countryOfBirth}
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
