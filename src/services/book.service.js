import axios from "../http";

export const getBooks = () => {
  return axios.get("http://localhost:3001/api/books");
};
