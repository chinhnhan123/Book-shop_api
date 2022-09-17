import axios from "../http";

export const getBooks = (page = 1, limit = 5) => {
  return axios.get(
    `http://localhost:3001/api/books?page=${page}&limit=${limit}`
  );
};
