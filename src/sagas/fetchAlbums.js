import axios from 'axios';
import {put} from 'redux-saga/effects';

import {
  ALBUMS_FETCH_SUCCESS,
  ALBUMS_FETCH_FAILURE,
} from "../actions/types";

export default function* fetchAlbums() {
  try {
    const res = yield axios(
      "https://jsonplaceholder.typicode.com/albums"
    );
    yield put({
      type: ALBUMS_FETCH_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    yield put({
      type: ALBUMS_FETCH_FAILURE,
      payload: err.response
    });
  }
}
