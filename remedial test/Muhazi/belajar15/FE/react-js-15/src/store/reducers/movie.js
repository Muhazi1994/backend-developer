import {
  GET_MOVIES_BEGIN,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAIL,
  GET_MOVIE_DETAIL_BEGIN,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_DETAIL_FAIL,
} from "../actions/types";

const initialState = {
  movies: [],
  loading: false,
  error: null,
  detailMovie: {
    loading: false,
    error: null,
    details: {},
  },
};

const movie = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case GET_MOVIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        movies: payload,
      };
    case GET_MOVIES_FAIL:
      return {
        ...state,
        loading: false,
        error: error,
        movies: [],
      };
    case GET_MOVIE_DETAIL_BEGIN:
      return {
        ...state,
        detailMovie: {
          loading: true,
          error: null,
        },
      };
    case GET_MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        detailMovie: {
          loading: false,
          error: null,
          details: payload,
        },
      };
    case GET_MOVIE_DETAIL_FAIL:
      return {
        ...state,
        detailMovie: {
          loading: false,
          error: error,
          details: [],
        },
      };
  }
};

export default movie;
