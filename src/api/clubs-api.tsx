import axios from "axios";

const fetchAllClubs = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/clubs");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchClubById = async (id: string) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/clubs/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchClubsByCompetition = async (id: string) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/clubs/competition/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchAllClubs, fetchClubById, fetchClubsByCompetition };
