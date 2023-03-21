import { delay, all, call, put, takeEvery, takeLatest } from "redux-saga";
import { fetchedSearchMovies } from "../redux/search";

function* fetchSearchMovies(action) {
  yield delay(500);

  yield put(fetchedSearchMovies(yield call()));
}
