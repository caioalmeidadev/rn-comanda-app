import {Alert} from 'react-native';
import {all, call, put, takeLatest} from 'redux-saga/effects';
import api from './../../../services/api';
import {ordersSuccess, ordersFailure} from './actions';

export function* getOrders() {
  try {
    const response = yield call(api.get, '/comandas');
    console.tron.log(response.data);
  } catch (err) {
    Alert.alert(
      'Falha ao carregar os pedidos',
      'Ocorreu uma falha ao carregar as comandas',
    );
    yield put(ordersFailure());
  }
}

export default all([takeLatest('@orders/GET_ORDERS_REQUEST', getOrders)]);
