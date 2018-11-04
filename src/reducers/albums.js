import {orderBy} from 'lodash';

import {
  ALBUMS_FETCH,
  ALBUMS_FETCH_FAILURE,
  ALBUMS_FETCH_SUCCESS,
  SORT_ALBUMS,
} from '../actions/types';

const INITIAL_STATE = {
  albums: [],
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
    case ALBUMS_FETCH:
      return {
        ...state,
        fetching: true,
        fetched: false
      };
    case ALBUMS_FETCH_SUCCESS:
      return {
        ...state,
        albums: action.payload,
        fetching: false,
        fetched: true
      };
    case SORT_ALBUMS:
      return {
        ...state,
        albums: orderBy(
          state.albums,
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
    case ALBUMS_FETCH_FAILURE:
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
