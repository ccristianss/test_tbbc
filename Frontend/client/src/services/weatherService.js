import axios from "axios";

axios.defaults.withCredentials = true;

const API_BASE_URL = "http://localhost:3092";

export const getUser = () => axios.get(`${API_BASE_URL}/auth/user`);

export const fetchCities = () => axios.get(`${API_BASE_URL}/favorite`);

export const logoutUser = () => axios.get(`${API_BASE_URL}/auth/logout`);

export const getWeatherDataByCity = (city) =>
  axios.get(`${API_BASE_URL}/weather/${city}`);

export const getWeatherDataByCoords = (lat, long) =>
  axios.get(`${API_BASE_URL}/weather/data`, { params: { lat, long } });

export const addFavoriteCity = (cityData) =>
  axios.post(`${API_BASE_URL}/favorite`, cityData);

export const removeFavoriteCity = (cityId) =>
  axios.delete(`${API_BASE_URL}/favorite/${cityId}`);
