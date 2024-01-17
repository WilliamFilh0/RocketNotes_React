import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotes-a5uk.onrender.com",
});
