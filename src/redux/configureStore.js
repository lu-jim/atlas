import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import statsReducer from './dashboard/dashboard';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  dashboard: statsReducer,
});
const store = createStore(
  reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(logger, thunk),
  ),
);
export default store;
