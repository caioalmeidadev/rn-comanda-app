export function ordersRequest() {
  return {
    type: '@orders/GET_ORDERS_REQUEST',
  };
}

export function ordersSuccess(orders) {
  return {
    type: '@orders/GET_ORDERS_SUCCESS',
    payload: {orders},
  };
}

export function ordersFailure() {
    return {
        type: '@orders/ORDERS_FAILURE'
    }
}
