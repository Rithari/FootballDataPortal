import React from "react";
import { Navbar, Footer } from "../../components/layout";
import { GameStats } from "../../components/common/Games/Game";
import {
  LiveEvent,
  LiveEvents,
} from "../../components/common/Games/Game/LiveEvents";

function Game() {
  const homeTeam = {
    id: 1,
    name: "Home Team",
    logoUrl: "/textures/team1.png",
    playerPositionById: [[1], [2, 3, 4, 5], [6, 7], [8, 9, 10], [11]],
    players: [
      {
        id: 1,
        name: "Home Player 1",
        tShirtImgUrl: "/textures/tshirt5.png",
        tShirtNr: "1",
        faceImgUrl: "/textures/generic-face.png",
      },
      {
        id: 2,
        name: "Home Player 2",
        tShirtImgUrl: "/textures/tshirt5.png",
        tShirtNr: "2",
        faceImgUrl: "/textures/generic-face.png",
      },
      {
        id: 3,
        name: "Home Player 3",
        tShirtImgUrl: "/textures/tshirt5.png",
        tShirtNr: "3",
        faceImgUrl: "/textures/generic-face.png",
      },
      {
        id: 4,
        name: "Home Player 4",
        tShirtImgUrl: "/textures/tshirt5.png",
        tShirtNr: "4",
        faceImgUrl: "/textures/generic-face.png",
      },
      {
        id: 5,
        name: "Home Player 5",
        tShirtImgUrl: "/textures/tshirt5.png",
        tShirtNr: "5",
        faceImgUrl: "/textures/generic-face.png",
      },
      {
        id: 6,
        name: "Home Player 6",
        tShirtImgUrl: "/textures/tshirt5.png",
        tShirtNr: "6",
        faceImgUrl: "/textures/generic-face.png",
      },
      {
        id: 7,
        name: "Home Player 7",
        tShirtImgUrl: "/textures/tshirt5.png",
        tShirtNr: "7",
        faceImgUrl: "/textures/generic-face.png",
      },
      {
        id: 8,
        name: "Home Player 8",
        tShirtImgUrl: "/textures/tshirt5.png",
        tShirtNr: "8",
        faceImgUrl: "/textures/generic-face.png",
      },
      {
        id: 9,
        name: "Home Player 9",
        tShirtImgUrl: "/textures/tshirt5.png",
        tShirtNr: "9",
        faceImgUrl: "/textures/generic-face.png",
      },
      {
        id: 10,
        name: "Home Player 10",
        tShirtImgUrl: "/textures/tshirt5.png",
        tShirtNr: "10",
        faceImgUrl: "/textures/generic-face.png",
      },
      {
        id: 11,
        name: "Home Player 11",
        tShirtImgUrl: "/textures/tshirt5.png",
        tShirtNr: "11",
        faceImgUrl: "/textures/generic-face.png",
      },
    ],
  };

  const awayTeam = {
    id: 1,
    name: "Away Team",
    logoUrl: "/textures/team2.png",
    playerPositionById: [[1], [2, 3, 4, 5], [6, 7], [8, 9, 10], [11]],
    players: [
      {
        id: 1,
        name: "Away Player 1",
        tShirtImgUrl: "/textures/tshirt9.png",
        tShirtNr: "1",
        faceImgUrl: "/textures/generic-face.png",
      },
      {
        id: 2,
        name: "Away Player 2",
        tShirtImgUrl: "/textures/tshirt9.png",
        tShirtNr: "2",
        faceImgUrl: "/textures/generic-face.png",
      },
      {
        id: 3,
        name: "Away Player 3",
        tShirtImgUrl: "/textures/tshirt9.png",
        tShirtNr: "3",
        faceImgUrl: "/textures/generic-face.png",
      },
      {
        id: 4,
        name: "Away Player 4",
        tShirtImgUrl: "/textures/tshirt9.png",
        tShirtNr: "4",
        faceImgUrl: "/textures/generic-face.png",
      },
      {
        id: 5,
        name: "Away Player 5",
        tShirtImgUrl: "/textures/tshirt9.png",
        tShirtNr: "5",
        faceImgUrl: "/textures/generic-face.png",
      },
      {
        id: 6,
        name: "Away Player 6",
        tShirtImgUrl: "/textures/tshirt9.png",
        tShirtNr: "6",
        faceImgUrl: "/textures/generic-face.png",
      },
      {
        id: 7,
        name: "Away Player 7",
        tShirtImgUrl: "/textures/tshirt9.png",
        tShirtNr: "7",
        faceImgUrl: "/textures/generic-face.png",
      },
      {
        id: 8,
        name: "Away Player 8",
        tShirtImgUrl: "/textures/tshirt9.png",
        tShirtNr: "8",
        faceImgUrl: "/textures/generic-face.png",
      },
      {
        id: 9,
        name: "Away Player 9",
        tShirtImgUrl: "/textures/tshirt9.png",
        tShirtNr: "9",
        faceImgUrl: "/textures/generic-face.png",
      },
      {
        id: 10,
        name: "Away Player 10",
        tShirtImgUrl: "/textures/tshirt9.png",
        tShirtNr: "10",
        faceImgUrl: "/textures/generic-face.png",
      },
      {
        id: 11,
        name: "Away Player 11",
        tShirtImgUrl: "/textures/tshirt9.png",
        tShirtNr: "11",
        faceImgUrl: "/textures/generic-face.png",
      },
    ],
  };

  const teamd = {
    id: 1,
    name: "Home Team",
    logoUrl: "/textures/team1.png",
    playerPositionById: [],
    players: [],
  };

  const matchData = {
    score: "2 - 1",
    time: "86'",
  };

  const eventsData = [
    {
      logoUrl: "/textures/yellow-card.png",
      time: "82'",
      players: [
        {
          id: 1,
          teamId: 1,
          name: "Home Player 1",
        },
      ],
    },
    {
      logoUrl: "/textures/yellow-card.png",
      time: "80'",
      players: [
        {
          id: 7,
          teamId: 2,
          name: "Away Player 7",
        },
      ],
    },
    {
      logoUrl: "/textures/goal.png",
      time: "73'",
      players: [
        {
          id: 2,
          teamId: 2,
          name: "Away Player 2",
        },
      ],
    },
    {
      logoUrl: "/textures/change2.png",
      time: "71'",
      players: [
        {
          id: 1,
          teamId: 1,
          name: "Home Player 1",
        },
        {
          id: 2,
          teamId: 1,
          name: "Home Player 2",
        },
      ],
    },
    {
      logoUrl: "/textures/goal.png",
      time: "65'",
      players: [
        {
          id: 3,
          teamId: 1,
          name: "Home Player 3",
        },
      ],
    },
    {
      logoUrl: "/textures/yellow-card.png",
      time: "61'",
      players: [
        {
          id: 1,
          teamId: 1,
          name: "Home Player 1",
        },
      ],
    },
    {
      logoUrl: "/textures/change2.png",
      time: "55'",
      players: [
        {
          id: 5,
          teamId: 2,
          name: "Away Player 5",
        },
        {
          id: 6,
          teamId: 2,
          name: "Away Player 6",
        },
      ],
    },
    {
      logoUrl: "/textures/goal.png",
      time: "53'",
      players: [
        {
          id: 4,
          teamId: 1,
          name: "Home Player 4",
        },
      ],
    },
    {
      logoUrl: "/textures/yellow-card.png",
      time: "49'",
      players: [
        {
          id: 9,
          teamId: 1,
          name: "Home Player 9",
        },
      ],
    },
    {
      logoUrl: "/textures/yellow-card.png",
      time: "36'",
      players: [
        {
          id: 5,
          teamId: 1,
          name: "Home Player 5",
        },
      ],
    },
    {
      logoUrl: "/textures/red-card.png",
      time: "31'",
      players: [
        {
          id: 2,
          teamId: 2,
          name: "Away Player 2",
        },
      ],
    },
    {
      logoUrl: "/textures/yellow-card.png",
      time: "23'",
      players: [
        {
          id: 2,
          teamId: 2,
          name: "Away Player 2",
        },
      ],
    },
  ];

  const gameStats = [
    {
      type: "Total Shots",
      home: "17",
      away: "12",
    },
    {
      type: "Shots On Target",
      home: "5",
      away: "7",
    },
    {
      type: "Pass Accuracy",
      home: "75%",
      away: "86%",
    },
    {
      type: "Aerial Won",
      home: "70%",
      away: "30%",
    },
    {
      type: "Offsides",
      home: "2",
      away: "3",
    },
    {
      type: "Fouls",
      home: "22",
      away: "13",
    },
    {
      type: "Corners",
      home: "3",
      away: "5",
    },
    {
      type: "Throwns",
      home: "23",
      away: "24",
    },
    {
      type: "Dribbles Won",
      home: "10",
      away: "17",
    },
    {
      type: "Tackles",
      home: "36",
      away: "28",
    },
  ];

  const possesionData = {
    type: "Possesion",
    home: "60%",
    away: "40%",
  };

  const playerClick = (player: any) => {
    console.log("Player clicked:", player);
  };

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
              onPlayerClick={playerClick}
            />
          ))}
        </LiveEvents>
        <GameStats
          homePlayers={homeTeam.players}
          awayPlayers={awayTeam.players}
          stats={gameStats}
          fieldTextureUrl="/textures/soccer-field.svg"
          possesionData={possesionData}
          onPlayerClick={playerClick}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Game;
