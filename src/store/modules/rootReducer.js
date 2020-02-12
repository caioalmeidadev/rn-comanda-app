import {combineReducers} from 'redux';
import auth from './auth/reducer';
import config from './config/reducer';
import orders from './orders/reducer';

export default combineReducers({
  auth,
  config,
  orders,
});
