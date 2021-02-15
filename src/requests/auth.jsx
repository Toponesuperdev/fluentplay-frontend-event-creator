import axios from "axios";
import {apiUrl} from "../config/api.jsx"

export const logIn = (param) => {
  return axios.post(`${apiUrl}/login`, param)
    .then((response) => {
      return response.data;
    });
};

export const signUp = (param) => {
  return axios.post(`${apiUrl}/signup`, param)
    .then((response) => {
      return response.data;
    });
};