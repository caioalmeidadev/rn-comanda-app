export function signInRequest(username, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {username, password},
  };
}

export function signInSuccess(user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {user},
  };
}

export function checkPassword(username, password, crypt) {
  const userId = String(username).padStart(6, '0');

  let passCrypt = '';
  let vAux = '';
  let vResult = '';

  passCrypt = `${password.substring(0, 1)}0${password.substring(
    1,
    3,
  )}0${password.substring(3, 4)}`;

  for (let index = 0; index < passCrypt.length; index++) {
    vAux =
      Number(passCrypt.substring(index, index + 1)) +
      Number(userId.substring(index, index + 1));

    vAux < 10
      ? (vResult = vResult + String(vAux))
      : (vResult = vResult + String(vAux).substring(1, 2));
  }

  if (vResult.substring(0, 2) === '00') {
    vResult = vResult.subtring(2, 4);
  } else if (vResult.substring(0, 1) === '0') {
    vResult = vResult.substring(1, 6);
  }
  return vResult === crypt ? true : false;
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
