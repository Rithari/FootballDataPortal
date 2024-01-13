import axios from "axios";

const fetchAllPlayers = async () => {
  try {
    const response = await axios.get("http://localhost:3001/players");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchPlayerById = async (id: string) => {
  try {
    const response = await axios.get(`http://localhost:3001/players/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchAllPlayers, fetchPlayerById };
