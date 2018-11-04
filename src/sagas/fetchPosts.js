import axios from 'axios';
import {put} from 'redux-saga/effects';

import {
  POSTS_FETCH_SUCCESS,
  POSTS_FETCH_FAILURE
} from "../actions/types";

export default function* fetchAlbums() {
  try {
    const res = yield axios(
      "https://jsonplaceholder.typicode.com/posts"
    );
    yield put({
      type: POSTS_FETCH_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    yield put({
      type: POSTS_FETCH_FAILURE,
      payload: err.response
    });
  }
}
