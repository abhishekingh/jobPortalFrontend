import axios from "axios";

const API = axios.create({
  baseURL: "https://jobportal-3-ak18.onrender.com/api"
});

export default API;