import {
  LOGIN,
  LOGOUT,
  ALBUMS_FETCH,
  SORT_ALBUMS,
  POSTS_FETCH,
  SORT_POSTS
} from './types';

export const loginUser = () => ({
  type: LOGIN,
});

export const logoutUser = () => ({
  type: LOGOUT,
});

export const fetchAlbums = () => ({
  type: ALBUMS_FETCH,
});

export const sortAlbums = (payload) => ({
  type: SORT_ALBUMS,
  payload: payload
});

export const fetchPosts = () => ({
  type: POSTS_FETCH,
});

export const sortPosts = (payload) => ({
  type: SORT_POSTS,
  payload: payload
});