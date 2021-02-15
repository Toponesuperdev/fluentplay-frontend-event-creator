import axios from "axios";
import {apiUrl} from "../config/api.jsx";

const token = localStorage.getItem('token');
const header = {
  authorization: 'Bearer ' + token
}

export const getSponsors = () => {
  return axios.get(`${apiUrl}/sponsors`, {headers: header})
    .then((response) => {
      return response.data;
    });
};

export const getSponsorById = (id) => {
  return axios.get(`${apiUrl}/sponsors/${id}`, {headers: header})
    .then((response) => {
      return response.data;
    });
};

export const createSponsor = (param) => {
  return axios.post(`${apiUrl}/sponsors`, param, {headers: header})
    .then((response) => {
      return response.data;
    });
};

export const updateSponsor = (param) => {
  return axios.put(`${apiUrl}/sponsors`, param, {headers: header})
    .then((response) => {
      return response.data;
    });
};