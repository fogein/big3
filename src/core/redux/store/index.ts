import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';

import { rootReducer } from "../../../modules/reducers/rootReducer"; 
import rootSaga from "../../../modules/sagas/rootSaga";
import thunk from "redux-thunk";


export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
    (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware,thunk, routerMiddleware(history))
);
const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;