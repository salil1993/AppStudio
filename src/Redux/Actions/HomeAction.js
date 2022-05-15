import {
    TABLE_DATA,
    TABLE_SUCCESS,
    TABLE_FAIL,
  } from './types';
  
  import {GetTableList} from '../../EndPoints';
  import * as Constants from '../../Constants';
  import Singleton from '../../Singleton';
  import { APIClient } from '../../api';

  

  
  /************************************** Table request ****************************************************/
  
  export function Table_data(token) {    
    console.log('user access token=>',token); 
    return (dispatch, getState) =>
      new Promise((resolve, reject) => {
        dispatch({type: TABLE_DATA});
        APIClient.getInstance()
          .get(GetTableList,token)
          .then(response => {
            let result = response;
            table_data_success(dispatch, result);
            resolve(result);
          })
          .catch(error => {
            let errorMessage = error.message;
            table_data_Failed(dispatch, errorMessage);
            reject(errorMessage);
          });
      });
  }
  
  const table_data_Failed = (dispatch, errorMessage) => {
    dispatch({
      type: TABLE_FAIL,
      payload: errorMessage,
    });
  };
  const table_data_success = (dispatch, message) => {
    dispatch({
      type: TABLE_SUCCESS,
      payload: message,
    });
  };
  