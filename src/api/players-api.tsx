import axios from "axios";

const fetchAllPlayers = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/players");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchPlayerById = async (id: string) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/players/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchAllPlayers, fetchPlayerById };
