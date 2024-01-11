import axios from 'axios';
const KEY = '1d18a145504f6d95230d64d5ffb9c58a';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export const fetchTrendMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${KEY}`);
  return response.data;
};

export const fetchSerchMovies = async query => {
  const response = await axios.get(
    `/search/movie?query=${query}&api_key=${KEY}`
  );
  return response.data;
};

export const fetchGetMovieDetailsById = async movieId => {
  const response = await axios.get(`/movie/${movieId}?api_key=${KEY}`);
  return response.data;
};

export const fetchGetMovieCreditsById = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${KEY}`
  );
  return response.data;
};

export const fetchGetMovieReviewsById = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${KEY}`
  );
  return response.data;
};