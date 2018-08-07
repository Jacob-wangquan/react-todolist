import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import createSagaMiddleware  from 'redux-saga';
import todoSagas from './sagas';
//import thunk from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
);
// const enhancer = composeEnhancers(
//     applyMiddleware(thunk)
// );
const store = createStore(
    reducer,
    enhancer
);

sagaMiddleware.run(todoSagas);

export default store;

