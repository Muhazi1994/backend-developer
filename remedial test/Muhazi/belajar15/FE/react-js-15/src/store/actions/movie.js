import {
  GET_MOVIES_BEGIN,
  GET_MOVIE_DETAIL_BEGIN,
  POST_MOVIE_BEGIN,
} from "./types";

export const getMovies = () => {
  return {
    type: GET_MOVIES_BEGIN,
  };
};

export const getMovieDetail = (id) => {
  return {
    type: GET_MOVIE_DETAIL_BEGIN,
    id,
  };
};

export const postMovie = (body) => {
  return {
    type: POST_MOVIE_BEGIN,
    body,
  };
};
