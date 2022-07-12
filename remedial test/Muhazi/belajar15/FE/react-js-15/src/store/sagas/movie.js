import { put, takeEvery } from "@redux-saga/core/effects";
import {
  GET_MOVIES_BEGIN,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAIL,
  GET_MOVIE_DETAIL_BEGIN,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_DETAIL_FAIL,
  POST_MOVIE_BEGIN,
  POST_MOVIE_SUCCESS,
  POST_MOVIE_FAIL,
} from "../actions/types";
import axios from "axios";

const baseUrl = "http://localhost:4000/movies";
//function generator
function* getMovies() {
  try {
    const res = yield axios.get(baseUrl);
    console.log(res);
    yield put({
      type: GET_MOVIES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: GET_MOVIES_FAIL,
      error: err,
    });
  }
}

function* getMovieDetail(actions) {
  const { id } = actions;
  try {
    const res = yield axios.get(`${baseUrl}/${id}`);
    console.log(res);
    yield put({
      type: GET_MOVIE_DETAIL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: GET_MOVIE_DETAIL_FAIL,
      error: err,
    });
  }
}

function* postMovie(actions) {
  const { body } = actions;
  try {
    const res = yield axios.post(`${baseUrl}`, body);
    console.log(res);
    yield put({
      type: POST_MOVIE_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: POST_MOVIE_FAIL,
      error: err,
    });
  }
}

export function* watchGetMovies() {
  yield takeEvery(GET_MOVIES_BEGIN, getMovies);
}

export function* watchGetMovieDetail() {
  yield takeEvery(GET_MOVIE_DETAIL_BEGIN, getMovieDetail);
}

export function* watchPostMovie() {
  yield takeEvery(POST_MOVIE_BEGIN, postMovie);
}
