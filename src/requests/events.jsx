import axios from "axios";
import {apiUrl} from "../config/api.jsx"

export const getEvents = () => {
  return axios.get(`${apiUrl}/events`)
    .then((response) => {
      return response.data;
    });
};

export const getEventById = (id) => {
  return axios.get(`${apiUrl}/events/${id}`)
    .then((response) => {
      return response.data;
    });
};

export const createEvent = (param) => {
  return axios.post(`${apiUrl}/events`, param)
    .then((response) => {
      return response.data;
    });
};

export const updateEvent = (param) => {
  return axios.put(`${apiUrl}/events`, param)
    .then((response) => {
      return response.data;
    });
};