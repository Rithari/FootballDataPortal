import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchClubById } from "../../../../../api/clubs-api"; // Adjust the import path as needed
import "./style.css";

export const ClubInfoHeader = (): JSX.Element => {
  const { id: clubId } = useParams();

  const [club, setClub] = useState<{
    clubId: number;
    clubCode: string;
    name: string;
    domesticCompetitionId: string;
    squadSize: number;
    averageAge: number;
    foreignersNumber: number;
    foreignersPercentage: number;
    nationalTeamPlayers: number;
    stadiumName: string;
    stadiumSeats: number;
    netTransferRecord: number;
    lastSeason: number;
    url: string;
  } | null>(null);

  useEffect(() => {
    const getClub = async () => {
      try {
        const clubData = await fetchClubById(clubId || "");
        setClub(clubData);
      } catch (error) {
        console.error("Failed to fetch club:", error);
      }
    };

    getClub();
  }, [clubId]);

  if (!club) {
    return <div className="club-info-header">Loading...</div>;
  }

  return (
    <div className="club-info-header">
      <div className="content">
        <div
          className="user"
          style={{
            backgroundImage: `url(https://tmssl.akamaized.net/images/wappen/head/${club.clubId}.png)`,
          }}
        />
        <div className="div">
          <div className="column">
            <div className="heading">{club.name}</div>
            <p className="text">
              € {club.netTransferRecord}m Transfer Record{" "}
              {/* TODO: Query all players to determine market value */}
            </p>
          </div>
          <div className="list">
            <div className="content-2">
              <div className="list-item">
                <div className="text-wrapper">Squad size</div>
                <div className="text-2">{club.squadSize}</div>
              </div>
              <div className="list-item">
                <div className="text-wrapper">National team players</div>
                <div className="text-2">{club.nationalTeamPlayers}</div>
              </div>
            </div>
            <div className="content-2">
              <div className="list-item-2">
                <div className="text-wrapper">Average age</div>
                <div className="text-2">{club.averageAge}</div>
              </div>
              <div className="list-item-2">
                <div className="text-wrapper">Stadium</div>
                <div className="text-3">{club.stadiumName}</div>
              </div>
            </div>
            <div className="content-2">
              <div className="list-item-2">
                <div className="text-wrapper">Foreigners</div>
                <div className="text-2">
                  {club.foreignersNumber} ({club.foreignersPercentage}%)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
