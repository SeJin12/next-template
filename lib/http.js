import axios from "axios";

// file: apiUtils.js

export const defaultGet = async (api, parameters) => {
  return await axios.get(api, parameters);
};

export const defaultPost = async (api, parameters) => {
  return await axios.post(api, parameters);
};

export const fetcherGet = (url, params, options) => axios.get(url, params, options).then((res) => res.data);

export const fetcherParamGet = async (api, parameters) => {
  return await axios.get(api, parameters);
};

export const fetcherPost = (url, params, options) =>
  axios.post(url, params, options).then((res) => res);