import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'j2rComandas',
      storage: AsyncStorage,
      whiteList: ['auth', 'config'],
    },
    reducers,
  );

  return persistedReducer;
};
