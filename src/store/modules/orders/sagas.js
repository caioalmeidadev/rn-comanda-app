import {all, takeLatest, call, put} from 'redux-saga';
import {Alert} from 'react-native';
import api from './../../../services/api';

import {ordersSuccess, ordersFailure} from './actions';

export function* getOrders() {
  try {
    const response = yield call(api.get, '/comandas/list');
  } catch (err) {
    Alert.alert(
      'Falha ao carregar os pedidos',
      'Ocorreu uma falha ao carregar as comandas',
    );
    yield put(ordersFailure());
  }
}
