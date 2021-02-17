import axios from "axios";
import { baseURL } from "./constants";

const axiosConfig = axios.create({
  baseURL,
});

export default axiosConfig;
