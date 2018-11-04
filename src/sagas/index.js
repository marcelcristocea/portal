import {takeLatest, all} from 'redux-saga/effects';

import {
  LOGIN,
  ALBUMS_FETCH,
  POSTS_FETCH
} from "../actions/types";

import fetchAlbums from './fetchAlbums';
import fetchPosts from './fetchPosts';
import loginUser from './loginUser';

function* actionWatcher() {
  yield takeLatest(LOGIN, loginUser);
  yield takeLatest(ALBUMS_FETCH, fetchAlbums);
  yield takeLatest(POSTS_FETCH, fetchPosts);
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
