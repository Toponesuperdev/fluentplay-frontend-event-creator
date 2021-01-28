import axios from "axios";

export const getArticles = (page = 1) => {
  return axios.get(`${apiUrl}/articles?page=${page}`)
    .then((response) => {
        return response.data;
    });
};