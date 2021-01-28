import axios from "axios";
import {apiUrl} from "../config/api.jsx"

export const getSponsors = () => {
  return axios.get(`${apiUrl}/sponsors`)
    .then((response) => {
      return response.data;
    });
};

export const getSponsorById = (id) => {
  return axios.get(`${apiUrl}/sponsors/${id}`)
    .then((response) => {
      return response.data;
    });
};

export const createSponsor = (param) => {
  return axios.post(`${apiUrl}/sponsors`, param)
    .then((response) => {
      return response.data;
    });
};

export const updateSponsor = (param) => {
  return axios.put(`${apiUrl}/sponsors`, param)
    .then((response) => {
      return response.data;
    });
};