import axios from "axios";
import {apiUrl} from "../config/api.jsx";

const token = localStorage.getItem('token');
const header = {
  authorization: 'Bearer ' + token
}

export const getEvents = () => {
  return axios.get(`${apiUrl}/events`, {headers: header})
    .then((response) => {
      return response.data;
    });
};

export const getEventById = (id) => {
  return axios.get(`${apiUrl}/events/${id}`, {headers: header})
    .then((response) => {
      return response.data;
    });
};

export const createEvent = (param) => {
  return axios.post(`${apiUrl}/events`, param, {headers: header})
    .then((response) => {
      return response.data;
    });
};

export const updateEvent = (param) => {
  return axios.put(`${apiUrl}/events`, param, {headers: header})
    .then((response) => {
      return response.data;
    });
};