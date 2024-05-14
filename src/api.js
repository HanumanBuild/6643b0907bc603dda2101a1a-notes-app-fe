import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_NOTES_APP_FE_URL
});

export default API;