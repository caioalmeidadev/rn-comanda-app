import { Alert } from 'react-native';
import { all, call, put } from 'redux-saga';
import api from './../../../services/api';
import { ordersFailure } from './actions';


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

export default all([]);