import axios from "axios";

export const defaultGet = async (api, parameters) => {
  return await axios.get(api, parameters);
};

export const defaultPost = async (api, parameters) => {
  return await axios.post(api, parameters);
};

export const fetcherGet = (url) => axios.get(url).then((res) => res.data);