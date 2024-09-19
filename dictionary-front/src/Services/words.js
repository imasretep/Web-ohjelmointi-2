import axios from "axios";

const BASE_URL = "http://localhost:3000/dictionary";

const getAll = async () => {
  const result = axios.get(BASE_URL);
  return result.data;
}

const getWord = async (word) => {
  try {
    const result = await axios.get(`${BASE_URL}/${word}`);
    return result.data;
  } catch (error) {
    if (error.response.status === 404) {
      return `Error: ${error.response.statusText}`;
    }
  }
}

const postWord = async (word) => {
  await axios.post(BASE_URL, word);

}

export default { getAll, getWord, postWord }

