import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {BrowserRouter as Router} from 'react-router-dom';

import reducers from './reducers';
import mySaga from './sagas';
import Routes from './routes';
import './index.css';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#f0f0f0'
    }
  },
  typography: {
    useNextVariants: true,
  }
});

const sagaMiddleware = createSagaMiddleware();
const newStore = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(mySaga);

const renderApp = (store) => {
  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Router>
          <Routes />
        </Router>
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
  );
};

renderApp(newStore);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
