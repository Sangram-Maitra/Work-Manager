import axios from "axios";

export const httpsTaksService = axios.create({
  baseURL: process.env.AXIOS_BASE_URL,
});
