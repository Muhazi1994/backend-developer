// root saga

import { all } from "redux-saga/effects";
import { watchGetMovies, watchGetMovieDetail, watchPostMovie } from "./movie";

export default function* rootSaga() {
  yield all([watchGetMovies(), watchGetMovieDetail(), watchPostMovie()]);
}
