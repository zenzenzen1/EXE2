import axios from "axios";
import { SERVER } from "./configuration.ts";

const httpClient = axios.create({
  baseURL: SERVER.NODE_SERVER_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default httpClient;