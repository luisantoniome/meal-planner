import axios from "axios";
import config from "@/config";

const getRequest = (path, params) =>
  axios.get(`${config.apiUrl}${path}`, params);

const api = {
  foods() {
    const params = {};
    return getRequest("foods", params);
  }
};

export default api;
