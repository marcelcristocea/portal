import {LOGIN, LOGGED_USER, LOGOUT} from '../actions/types';

const INITIAL_STATE = {
  user: {},
  loggedUser: false
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state };
    case LOGGED_USER:
      return {
        ...state,
        user: action.payload,
        loggedUser: true
      };
    case LOGOUT:
      return {
        ...state,
        loggedUser: false
      };
    default:
      return state;
  }
}
