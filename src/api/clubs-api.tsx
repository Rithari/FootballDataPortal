import axios from "axios";

// Express API URL
const apiURL = import.meta.env.REACT_APP_API_URL || "http://localhost:3000";

const fetchAllClubs = async () => {
  try {
    const response = await axios.get(`${apiURL}/api/clubs`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchClubById = async (id: string) => {
  try {
    const response = await axios.get(`${apiURL}/api/clubs/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchClubsByCompetition = async (id: string) => {
  try {
    const response = await axios.get(`${apiURL}/api/clubs/competition/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchClubPlayers = async (id: string) => {
  try {
    const response = await axios.get(`${apiURL}/api/clubs/${id}/players`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export {
  fetchAllClubs,
  fetchClubById,
  fetchClubsByCompetition,
  fetchClubPlayers,
};
