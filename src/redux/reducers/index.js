import {combineReducers} from 'redux';
import {authReducer} from './reducer';

const rootReducer = combineReducers({
  authReducer,
});

export default rootReducer;
