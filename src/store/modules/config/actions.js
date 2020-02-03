export function configRequest() {
  return {
    type: '@config/GET_CONFIG_REQUEST',
  };
}

export function configSuccess(config) {
  return {
    type: '@config/GET_CONFIG_SUCCESS',
    payload: {config},
  };
}

export function setHost(host) {
  return {
    type: '@config/SET_HOST',
    payload: {host},
  };
}

export function configFailure() {
  return {
    type: '@config/FAILURE',
  };
}

export function configReset() {
  return {
    type: '@config/RESET',
  };
}
