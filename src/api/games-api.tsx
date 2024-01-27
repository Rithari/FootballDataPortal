import axios from "axios";

const fetchAllGames = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/games");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchGamenById = async (id: string) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/games/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchGamesByClub = async (id: string) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/games/club/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchAllGames, fetchGamenById, fetchGamesByClub };
