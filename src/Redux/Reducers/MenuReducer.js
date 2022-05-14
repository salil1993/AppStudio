import {Actions} from 'react-native-router-flux';
import {
    FULL_MENU_DATA,
    FULL_MENU_DATA_SUCCESS,
    FULL_MENU_DATA_FAIL,
} from '../Actions/types';
const INITIAL_STATE = {
    menudata:[],
    menu_data_fail :''

};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FULL_MENU_DATA_SUCCESS:
      return {...state, tabledata: action.payload};
    case FULL_MENU_DATA_FAIL:
      return {...state, table_data_fail: action.payload};
    default:
      return state;
  }
};