import axios from "axios";
import {apiUrl} from "../config/api.jsx"

export const getSessions = () => {
  return axios.get(`${apiUrl}/sessions`)
    .then((response) => {
      return response.data;
    });
};

export const getSessionById = (id) => {
  return axios.get(`${apiUrl}/sessions/${id}`)
    .then((response) => {
      return response.data;
    });
};

export const createSession = (param) => {
  return axios.post(`${apiUrl}/sessions`, param)
    .then((response) => {
      return response.data;
    });
};

export const updateSession = (param) => {
  return axios.put(`${apiUrl}/sessions`, param)
    .then((response) => {
      return response.data;
    });
};