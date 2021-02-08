import axios from "axios";
import {apiUrl} from "../config/api.jsx"

export const login = (param) => {
  return axios.post(`${apiUrl}/login`, param)
    .then((response) => {
      return response.data;
    });
};