import axios from "axios";

const fetchAllCompetitions = async () => {
  try {
    const response = await axios.get("http://localhost:3001/competitions");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchCompetitionById = async (id: string) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/competitions/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchAllCompetitions, fetchCompetitionById };
