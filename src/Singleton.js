import AsyncStorage from '@react-native-async-storage/async-storage';
import * as constants from './Constants';

export default class Singleton {
  static myInstance = null;
  deviceToken = '';
  accessToken = '';

  checkAuthBack = false;

  static getInstance() {
    if (Singleton.myInstance == null) {
      Singleton.myInstance = new Singleton();
    }
    return this.myInstance;
  }

  async saveToken(token) {
    alert(token)
    Singleton.getInstance().accessToken = token;
    await this.saveData(constants.ACCESS_TOKEN, token);
  }

  saveData(key, value) {
    return new Promise((resolve, reject) => {
      AsyncStorage.setItem(key, value)
        .then(response => {
          console.log('response----------',value)
          resolve(value);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  getData(key) {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  clearStorage() {
    return new Promise((resolve, reject) => {
      AsyncStorage.clear()
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
