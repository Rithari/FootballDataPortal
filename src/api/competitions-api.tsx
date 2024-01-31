import axios from "axios";

// Express API URL
const apiURL = import.meta.env.REACT_APP_API_URL || "http://localhost:3000";

const fetchAllCompetitions = async () => {
  try {
    const response = await axios.get(`${apiURL}/api/competitions`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchCompetitionById = async (id: string) => {
  try {
    const response = await axios.get(`${apiURL}/api/competitions/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchCompetitonStatistics = async (id: string) => {
  try {
    const response = await axios.get(
      `${apiURL}/api/competitions/${id}/statistics`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export {
  fetchAllCompetitions,
  fetchCompetitionById,
  fetchCompetitonStatistics,
};
