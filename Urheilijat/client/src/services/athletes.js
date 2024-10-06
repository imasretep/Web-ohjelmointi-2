import axios from "axios";
const baseUrl = "http://localhost:3000/api"

const getAll = async () => {
  const res = await axios.get(`${baseUrl}/athletes`);
  return res.data;
};

const deleteAthlete = async (id) => {
  const res = await axios.delete(`${baseUrl}/${id}`);
  return res.data;
};

const addAthlete = async (athlete) => {
  const res = await axios.post(`${baseUrl}/add`, athlete);
  return res;
};

const updateAthlete = async (athlete) => {
  const res = await axios.put(`${baseUrl}/athletes/${athlete.id}`, athlete);
  return res;
}

export default { getAll, deleteAthlete, addAthlete, updateAthlete };
