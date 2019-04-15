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

  searchByBrand: async brandId => {
    try {
      const result = await get("foods/search-by-brand", {
        params: { brandId }
      });
      return result.data.response;
    } catch (error) {
      console.error(error);
    }
  }
};

export default api;
