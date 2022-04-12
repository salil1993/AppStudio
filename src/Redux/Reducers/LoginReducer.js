import {Actions} from 'react-native-router-flux';
import {
  LOGIN_USER,
  LOGIN_DATA_UPDATE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
} from '../Actions/types';
const INITIAL_STATE = {
  loginEmail: '',
  isLoading: false,
  loginUser: '',
  loginError: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_DATA_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value};
    case LOGIN_USER:
      return {...state, isLoading: true, registerError: ''};
    case LOGIN_USER_SUCCESS:
      return {...state, loginUser: action.payload, ...INITIAL_STATE};
    case LOGIN_USER_FAIL:
      return {...state, loginError: action.payload, isLoading: false};
    default:
      return state;
  }
};