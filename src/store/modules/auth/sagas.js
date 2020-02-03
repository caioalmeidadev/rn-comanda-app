import {all, takeLatest, call, put} from 'redux-saga/effects';
import {Alert} from 'react-native';
import api from './../../../services/api';

import {signInSuccess, signFailure, checkPassword} from './actions';

export function* signIn({payload}) {
  try {
    const {username, password} = payload;

    const response = yield call(api.get, `/usuarios/${username}`);

    yield put(signInSuccess(response.data[0]));
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Falha na autenticação. Verifique seus dados.',
    );
    yield put(signFailure());
  }
}

export function* signUp({payload}) {
  try {
    const {name, email, password} = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    // history.push('/');
  } catch (err) {
    Alert.alert(
      'Falha ao cadastrar',
      'Falha no cadastro. Verifique seus dados',
    );
    yield put(signFailure());
  }
}

export function setToken({payload}) {
  if (!payload) {
    return;
  }

  const {token} = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  //   history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
