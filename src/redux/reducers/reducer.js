import {AUTH} from '../configs/types';

const initialState = {
  isLoggedIn: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {

    case AUTH.LOGIN:{
      return {...state, isLoggedIn: true}
    }
    case AUTH.LOGOUT:{
      return {...state, isLoggedIn: false};
    }
    default:
      return state;
  }
};
