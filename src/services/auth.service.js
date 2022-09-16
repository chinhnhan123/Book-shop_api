import axios from "axios";

export const login = (config) => {
  console.log(config);
  return axios.post("http://localhost:3001/auth/login", config);
};
