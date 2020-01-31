import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSagas from './modules/rootSagas';
import persistReducers from './persist-reducers';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({sagaMonitor});

const middlewares = [sagaMiddleware];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);
sagaMiddleware.run(rootSagas);

export {store, persistor};