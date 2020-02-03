import {all, call, put, takeLatest} from 'redux-saga/effects';
import api from './../../../services/api';
import {configFailure, configSuccess} from './actions';
import {Alert} from 'react-native';

export function* getConfig() {
  try {
    const menu = yield call(api.get, '/getmenu');

    const menuItems = yield call(api.get, '/getmenuitens');

    const users = yield call(api.get, '/getgravarusuarios');

    yield put(
      configSuccess({
        menu: menu.data,
        menuItems: menuItems.data,
        users: users.data,
      }),
    );
  } catch (err) {
    yield put(configFailure());
  }
}

export function* setConfig({payload}) {
  if (!payload) {
    return;
  }
  api.defaults.baseURL = `http://${payload.config.host}`;
}

export function* setHostConfig(host) {
  try {
    if (host) {
      Alert.alert('Configurações', 'Configuração gravada com sucesso.');
    }
  } catch (err) {}
}

export default all([
  takeLatest('persist/REHYDRATE', setConfig),
  takeLatest('@config/SET_HOST', setHostConfig),
  takeLatest('@config/GET_CONFIG_REQUEST', getConfig),
]);
