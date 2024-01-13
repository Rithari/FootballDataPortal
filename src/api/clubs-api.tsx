import axios from "axios";

const fetchAllClubs = async () => {
  try {
    const response = await axios.get("http://localhost:3001/clubs");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchClubById = async (id: string) => {
  try {
    const response = await axios.get(`http://localhost:3001/clubs/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchAllClubs, fetchClubById };
