import {combineReducers} from 'redux';
import auth from './auth/reducer';
import config from './config/reducer';

export default combineReducers({
  auth,
  config,
});
