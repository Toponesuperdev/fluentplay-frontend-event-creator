import axios from "axios";
import {apiUrl} from "../config/api.jsx"

const token = localStorage.getItem('token');
const header = {
  authorization: 'Bearer ' + token
}

export const getSessions = () => {
  return axios.get(`${apiUrl}/sessions`, {headers: header})
    .then((response) => {
      return response.data;
    });
};

export const getSessionById = (id) => {
  return axios.get(`${apiUrl}/sessions/${id}`, {headers: header})
    .then((response) => {
      return response.data;
    });
};

export const createSession = (param) => {
  return axios.post(`${apiUrl}/sessions`, param, {headers: header})
    .then((response) => {
      return response.data;
    });
};

export const updateSession = (param) => {
  return axios.put(`${apiUrl}/sessions`, param, {headers: header})
    .then((response) => {
      return response.data;
    });
};