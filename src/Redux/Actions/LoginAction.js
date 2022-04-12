import {
    LOGIN_USER,
    LOGIN_DATA_UPDATE,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
  } from './types';
  
  import {LOGIN_USER_API_POST} from '../../EndPoints';
  import * as Constants from '../../Constants';
  import Singleton from '../../Singleton';
  import {Actions} from 'react-native-router-flux';
  import {APIClient} from '../../Api/APIClient';
  
  /**************************************Reset all prop values ****************************************************/
  
  export const loginDataUpdate = ({prop, value}) => {
    return {
      type: LOGIN_DATA_UPDATE,
      payload: {prop, value},
    };
  };
  
  /************************************** User registration Api request ****************************************************/
  
  export function userLogin(data) {
    console.log('login_parms===',data);
    return (dispatch, getState) =>
      new Promise((resolve, reject) => {
        dispatch({type: LOGIN_USER});
        APIClient.getInstance()
          .post(LOGIN_USER_API_POST, data)
          .then(response => {
            let result = response;
            console.log('response_login===',result);
            loginSuccess(dispatch, result);
            resolve(result);
            {result.message=='Email has been sent, please verify this email to allow this device.'?null:
            Singleton.getInstance().saveData(Constants.ACCESS_TOKEN, result.JwtToken)
            Singleton.getInstance().saveData(Constants.IS_LOGIN, 'isLogin')
            Singleton.getInstance().saveData(Constants.USERID, result.UserId)
             }
          })
          .catch(error => {
            let errorMessage = error.message;
            loginFailed(dispatch, errorMessage);
            reject(errorMessage);
          });
      });
  }
  
  const loginFailed = (dispatch, errorMessage) => {
    dispatch({
      type: LOGIN_USER_FAIL,
      payload: errorMessage,
    });
  };
  const loginSuccess = (dispatch, message) => {
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: message,
    });
  };
  