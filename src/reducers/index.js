import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import app from './app';
import albums from './albums';
import posts from './posts';

// export default reducer;
export default combineReducers({
  app,
  albums,
  posts,
  form: formReducer
});

