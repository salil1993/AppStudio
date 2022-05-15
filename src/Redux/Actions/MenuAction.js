import {
    FULL_MENU_DATA,
    FULL_MENU_DATA_SUCCESS,
    FULL_MENU_DATA_FAIL,
  } from './types';
  
  import {getFullMenuList} from '../../EndPoints';
  import * as Constants from '../../Constants';
  import Singleton from '../../Singleton';
  import { APIClient } from '../../api';

  

  
  /************************************** Get Full Menu request ****************************************************/
  
  export function Full_Menu(token) {   
    return (dispatch, getState) =>
      new Promise((resolve, reject) => {
        dispatch({type: FULL_MENU_DATA});
        APIClient.getInstance()
          .get(getFullMenuList,token)
          .then(response => {
            let result = response;
            console.log('responseAction----------', result);
            full_menu_success(dispatch, result);
            resolve(result);
          })
          .catch(error => {
            let errorMessage = error.message;
            full_menu_Failed(dispatch, errorMessage);
            reject(errorMessage);
          });
      });
  }
  
  const full_menu_Failed = (dispatch, errorMessage) => {
    dispatch({
      type: FULL_MENU_DATA_FAIL,
      payload: errorMessage,
    });
  };
  const full_menu_success = (dispatch, message) => {
    dispatch({
      type: FULL_MENU_DATA_SUCCESS,
      payload: message,
    });
  };
  