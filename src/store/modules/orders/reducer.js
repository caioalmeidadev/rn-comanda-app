import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  orders: {},
};

export default function order(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@orders/GET_ORDERS_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@orders/GET_ORDERS_SUCCESS': {
        draft.order = action.payload.orders;
        draft.loading = false;
        break;
      }
      case '@orders/ORDERS_FAILURE': {
        draft.loading = false;
        draft.orders = draft.orders || {};
      }
      default:
    }
  });
}
