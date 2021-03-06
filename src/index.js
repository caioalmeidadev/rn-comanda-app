import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import './config/ReactotronConfig';
import {store, persistor} from './store';

import AuthRoutes from './AuthRoutes';
import 'react-native-gesture-handler';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <AuthRoutes />
      </PersistGate>
    </Provider>
  );
}
