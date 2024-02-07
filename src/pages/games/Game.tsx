import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchGameById } from "../../api/games-api";
import { fetchPlayerById } from "../../api/players-api";
import { Navbar, Footer } from "../../components/layout";
import {
  LiveEvent,
  LiveEvents,
} from "../../components/common/Games/Game/LiveEvents";
import { GameStats } from "../../components/common/Games/Game/GameStats";

interface Player {
  id: number;
  name: string;
  tShirtImgUrl: string;
  tShirtNr: string;
  faceImgUrl: string;
  position: string;
}

interface Team {
  id: number;
  name: string;
  logoUrl: string;
  playerPositionById: number[][];
  players: Player[];
}

interface Match {
  score: string;
  time: string;
}

interface GameEvent {
  logoUrl: string;
  time: string;
  players: Array<{
    id: number;
    teamId: number;
    name: string;
  }>;
}

interface GameData {
  game_lineups: Array<any>;
  game_events: Array<any>;
  home_club_id: number;
  away_club_id: number;
  home_club_name: string;
  away_club_name: string;
  aggregate: string;
  home_club_goals: number;
  away_club_goals: number;
}

function Game() {
  const [gameData, setGameData] = useState<GameData | null>(null);
  const [eventsData, setEventsData] = useState<GameEvent[]>([]);
  const [homeTeam, setHomeTeam] = useState<Team | null>(null);
  const [awayTeam, setAwayTeam] = useState<Team | null>(null);
  const [matchData, setMatchData] = useState<Match | null>(null);
  const { gameId } = useParams<{ gameId: string }>();

  // Helper function to get the event icon URL based on event description and type
  const getEventIconUrl = (
    description: string,
    eventType: string
  ): string | null => {
    const type = eventType.toLowerCase();
    const desc = description.toLowerCase();
    if (type === "substitutions") return "/textures/change2.png";
    if (type === "cards") {
      if (desc.includes("yellow card")) return "/textures/yellow-card.png";
      if (desc.includes("red card")) return "/textures/red-card.png";
    }
    if (type === "goals") return "/textures/goal.png";
    return null;
  };

  // Load game data when the gameId changes
  useEffect(() => {
    const loadData = async () => {
      console.log(gameId);
      if (gameId) {
        const data = await fetchGameById(gameId);
        if (data) {
          setGameData(data);
        }
      }
    };

    loadData();
  }, [gameId]);

  // Process game data when gameData is available
  useEffect(() => {
    if (gameData) {
      processGameEvents().then((events) => {
        setEventsData(events);
      });

      const homeTeamData = transformTeamData(gameData.home_club_id);
      const awayTeamData = transformTeamData(gameData.away_club_id);

      const score =
        gameData.aggregate ||
        `${gameData.home_club_goals}-${gameData.away_club_goals}`;
      const matchTime = "90'";

      setHomeTeam(homeTeamData);
      setAwayTeam(awayTeamData);
      setMatchData({
        score,
        time: matchTime,
      });
    }
  }, [gameData]);

  // Function to fetch player's name by ID
  const fetchPlayerName = async (playerId: string): Promise<string> => {
    try {
      const playerData = await fetchPlayerById(playerId);
      return playerData ? playerData.name : "Unknown Player";
    } catch (error) {
      console.error("Error fetching player data:", error);
      return "Unknown Player";
    }
  };

  // Map players from game lineups
  const mapPlayers = (lineups: Array<any>, teamId: number): Player[] => {
    return lineups
      .filter((player) => player.club_id === teamId)
      .map((player) => ({
        id: player.player_id,
        name: player.player_name,
        tShirtImgUrl: `/textures/tshirt${player.number % 10}.png`,
        tShirtNr: player.number,
        faceImgUrl: "/textures/generic-face.png",
        position: player.position,
      }));
  };

  // Transform team data based on teamId
  const transformTeamData = (teamId: number): Team => {
    if (!gameData)
      return {
        id: 0,
        name: "",
        logoUrl: "",
        playerPositionById: [],
        players: [],
      };

    const teamLineup = gameData.game_lineups.filter(
      (player) => player.club_id === teamId
    );
    const teamPlayers = mapPlayers(teamLineup, teamId);
    const teamName =
      teamId === gameData.home_club_id
        ? gameData.home_club_name
        : gameData.away_club_name;
    const playerPositionById = teamPlayers.map((player) => [
      parseInt(player.tShirtNr, 10),
    ]);

    // Dynamically generate the logo URL using the teamId
    const logoUrl = `https://tmssl.akamaized.net/images/wappen/head/${teamId}.png`;

    return {
      id: teamId,
      name: teamName || "Unknown Team",
      // Placeholder -> logoUrl: `/textures/team${teamId === gameData.home_club_id ? 1 : 2}.png`,
      logoUrl,
      playerPositionById,
      players: teamPlayers,
    };
  };

  // Process game events into the desired format
  const processGameEvents = async (): Promise<GameEvent[]> => {
    if (!gameData) return [];
    const processedEvents: GameEvent[] = [];

    // Sort game events by minute in ascending order
    gameData.game_events.sort((a, b) => a.minute - b.minute);

    for (const event of gameData.game_events) {
      const iconUrl = getEventIconUrl(event.description, event.type);
      if (!iconUrl) continue; // Skip events without a matching icon

      let players = [];

      if (event.type.toLowerCase() === "substitutions") {
        const playerOutName = event.player_id
          ? await fetchPlayerName(event.player_id.toString())
          : "Unknown Player";
        const playerInName = event.player_in_id
          ? await fetchPlayerName(event.player_in_id.toString())
          : "Unknown Player";

        players = [
          {
            id: event.player_id,
            teamId: event.club_id === gameData.home_club_id ? 1 : 2,
            name: `${playerOutName}`,
          },
          {
            id: event.player_in_id,
            teamId: event.club_id === gameData.home_club_id ? 1 : 2,
            name: `${playerInName}`,
          },
        ];
      } else {
        const playerName = event.player_id
          ? await fetchPlayerName(event.player_id.toString())
          : "Unknown Player";

        players.push({
          id: event.player_id,
          teamId: event.club_id === gameData.home_club_id ? 1 : 2,
          name: playerName,
        });
      }

      processedEvents.push({
        logoUrl: iconUrl,
        time: `${event.minute}'`,
        players,
      });
    }

    return processedEvents;
  };

  // Render loading message if data is not available
  if (!gameData || !homeTeam || !awayTeam) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="page-wrapper-1">
        <LiveEvents
          homeTeam={homeTeam}
          awayTeam={awayTeam}
          matchData={matchData}
        >
          {eventsData.map((event, i) => (
            <LiveEvent
              type={event.players[0].teamId === 1 ? "home" : "away"}
              {...event}
              key={i}
            />
          ))}
        </LiveEvents>
        <GameStats />
      </div>
      <Footer />
    </div>
  );
}

export default Game;
