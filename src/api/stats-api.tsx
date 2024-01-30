import axios from "axios";

// fetchStatistics. Payload is an object with the following properties:
// statsCategory: "allPlayers", "allClubs", "player", "club", "competition", "game".
// identifier(optional): playerID, clubID, competitionID, gameID.

const fetchStatistics = async (payload: any) => {
  // Validate payload
  if (!payload.statsCategory) {
    throw new Error("statsCategory is required");
  }

  if (
    payload.statsCategory !== "allPlayers" &&
    payload.statsCategory !== "allClubs" &&
    payload.statsCategory !== "player" &&
    payload.statsCategory !== "club" &&
    payload.statsCategory !== "competition" &&
    payload.statsCategory !== "game"
  ) {
    throw new Error("statsCategory is invalid");
  }

  try {
    // Updated to make a GET request with query parameters
    const response = await axios.get(`http://localhost:3000/api/stats`, {
      params: {
        statsCategory: payload.statsCategory,
        identifier: payload.identifier, // This can be undefined, which is fine
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching statistics:", error);
    throw error; // Rethrowing the error to be handled by the caller
  }
};

export { fetchStatistics };
