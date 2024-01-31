import axios from "axios";

const apiURL = import.meta.env.REACT_APP_API_URL || "http://localhost:3000";

const fetchAllPlayers = async () => {
  try {
    const response = await axios.get(`${apiURL}/api/players`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchPlayerById = async (id: string) => {
  try {
    const response = await axios.get(`${apiURL}/api/players/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchAllPlayers, fetchPlayerById };
