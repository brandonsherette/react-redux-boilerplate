import { applyMiddleware, createStore } from 'redux';
import { combineReducers, compose } from 'redux';
// import routers
import { connectRouter, routerMiddleware } from 'connected-react-router';
import getHistory from '~util/getHistory';
// import saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from '~/modules/rootSaga';
// import reducers

const IN_DEBUG_MODE = true; // true to apply enhancer to debugging

// create saga middleware
const sagaMiddleware = createSagaMiddleware();
const history = getHistory();

// create reducers
const rootReducer = combineReducers({
  router: connectRouter(history),
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      sagaMiddleware,
      routerMiddleware(history),
    ),
    (IN_DEBUG_MODE && window.__REDUX_DEVTOOLS_EXTENSION__) ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f 
  )
);

sagaMiddleware.run(rootSaga);

export default store;