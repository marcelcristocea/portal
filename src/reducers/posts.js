import {orderBy} from 'lodash';

import {
  POSTS_FETCH,
  POSTS_FETCH_SUCCESS,
  POSTS_FETCH_FAILURE,
  SORT_POSTS,
} from '../actions/types';

const INITIAL_STATE = {
  posts: [],
  errors: [],
  fetching: false,
  fetched: false,
  sort: {
    sortBy: 'title',
    sortDirection: 'ASC'
  }
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case POSTS_FETCH:
      return {
        ...state,
        fetching: true,
        fetched: false
      };
    case POSTS_FETCH_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        fetching: false,
        fetched: true
      };
    case SORT_POSTS:
      return {
        ...state,
        posts: orderBy(
          state.posts,
          [action.payload.sortBy],
          [action.payload.sortDirection.toLowerCase()]
        ),
        fetching: false,
        fetched: true,
        sort: {
          sortBy: action.payload.sortBy,
          sortDirection: action.payload.sortDirection
        }
      };
    case POSTS_FETCH_FAILURE:
      return {
        ...state,
        errors: action.payload,
        fetching: false,
        fetched: false
      };

    default:
      return state;
  }
}
