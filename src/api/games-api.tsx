import axios from "axios";

// Express API URL
const apiURL = import.meta.env.REACT_APP_API_URL || "http://localhost:3000";

const fetchAllGames = async () => {
  try {
    const response = await axios.get(`${apiURL}/api/games`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchGameById = async (id: string) => {
  try {
    const response = await axios.get(`${apiURL}/api/games/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchGamesByClub = async (id: string) => {
  try {
    const response = await axios.get(`${apiURL}/api/games/club/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchAllGames, fetchGameById, fetchGamesByClub };
