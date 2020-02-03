import produce from 'immer';

const INITIAL_STATE = {
  isLoad: false,
  loading: false,
  host: null,
  users: {},
  menu: {},
  menuItems: {},
};

export default function config(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@config/GET_CONFIG_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@config/GET_CONFIG_SUCCESS': {
        draft.loading = false;
        draft.isLoad = true;
        draft.menu = action.payload.config.menu;
        draft.menuItems = action.payload.config.menuItems;
        draft.users = action.payload.config.users;
        break;
      }
      case '@config/SET_HOST': {
        draft.host = action.payload.host;
        break;
      }
      case '@config/FAILURE': {
        draft.loading = false;
        break;
      }
      case '@config/RESET': {
        draft = INITIAL_STATE;
        break;
      }
      default:
    }
  });
}
