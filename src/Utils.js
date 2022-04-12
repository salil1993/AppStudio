import AsyncStorage from '@react-native-async-storage/async-storage';
export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const passwordRegEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,}$/;
export const digitRegEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,}$/;
export const ALPHANUMERIC_REGEX = /^[a-zA-Z0-9]*$/;
export var testVariable = 0;
export var environment = 'mainnet';
export var socketUrl = 'exchange';



export const saveToAsyncStorage = (key, value) => {
    console.log('save data key ########');
    console.log(key);
    console.log('save data value ########');
    console.log(value);
    console.log('save data');
    return new Promise((resolve, reject) => {
      AsyncStorage.setItem(key, value)
        .then(response => {
          console.log('saved #### ' + key);
          resolve(value);
        })
        .catch(error => {
          console.log('error #### ' + key);
          reject(error);
        });
    });
  };
  export const getAsyncStorage = key => {
    // console.log('get key ########');
    console.log(key);
    // console.log('get key ########');
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key)
        .then(response => {
          // console.log('get response $$$$$');
          console.log(response);
          // console.log('get response $$$$$');
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  };





  

