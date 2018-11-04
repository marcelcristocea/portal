import {put} from 'redux-saga/effects';

import {
  LOGGED_USER,
} from "../actions/types";

export default function* loginUser() {
  /**
   * TODO: Implement loggin API
   */
  const user ={
    name: 'Jon Doe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet purus sed nulla molestie efficitur. Proin suscipit libero nec aliquet tristique. Curabitur ac urna gravida, feugiat nunc et, tincidunt tortor. Vestibulum quis tristique sem, vitae facilisis nunc. Pellentesque aliquet egestas elit, id facilisis dolor fermentum ac. Ut pretium dui volutpat scelerisque hendrerit. Donec ut neque eleifend, ultricies eros vel, vulputate dui.'
  };

  yield put({ type: LOGGED_USER, payload: user});
}
