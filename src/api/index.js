import axios from "axios";
import config from "@/config";

const get = (path, params) => axios.get(`${config.apiUrl}${path}`, params);

const api = {
  foods: () => get("foods"),

  searchFood: async query => {
    try {
      const result = await get("foods/search", { params: { query } });
      return result.data.response;
    } catch (error) {
      console.error(error);
    }
  },

  brands: () => get("foods/brands"),

  filter: async (brand, tags) => {
    try {
      const result = await get("foods/filter", {
        params: { brand, tags }
      });
      return result.data.response;
    } catch (error) {
      console.error(error);
    }
  },

  tags: () => get("tags")
};

export default api;
