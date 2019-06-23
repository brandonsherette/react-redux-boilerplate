import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import { ConnectedRouter } from 'connected-react-router';
import getHistory from '~util/getHistory';

require('./styles/index.scss');

const appRoot = document.getElementById('app-root');
const history = getHistory();

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
), appRoot);