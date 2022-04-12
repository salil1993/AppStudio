import {BASE_URL} from '../EndPoints';
import RNFetchBlob from 'rn-fetch-blob';
const APIClient = class APIClient {
  static myInstance = null;
  static getInstance() {
    if (APIClient.myInstance == null) {
      APIClient.myInstance = new APIClient();
    }
    return this.myInstance;
  }
  //////////////////////////////////////////////////////////----GET METHOD---////////////////////////////////////////////////////////////////////////////////////////////////////////////

  get(endpoint, UserToken) {
    return new Promise((resolve, reject) => {
      fetch(`${BASE_URL}${endpoint}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'api-access-token': UserToken,
        },
      })
        .then(async res => {
          let response = await res.json();
          if (!res.ok) {
            return reject(response);
          }
          return resolve(response);
        })
        .catch(reject);
    });
  }

  //////////////////////////////////////////////////////////----POST METHOD---////////////////////////////////////////////////////////////////////////////////////////////////////////////

  post(endpoint, data, UserToken) {
    console.log('END URL::', `${BASE_URL}${endpoint}`);
  
    return new Promise((resolve, reject) => {
      fetch(`${BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'api-access-token': UserToken,
        },
        body: data != null ? JSON.stringify(data) : null,
      })
        .then(async res => {
          console.log('API POST RESPONSE::', res);
          let response = await res.json();

          if (!res.ok) {
            return reject(response);
          }
          return resolve(response);
        })
        .catch(reject);
    });
  }

  //////////////////////////////////////////////////////////----POSTS METHOD---////////////////////////////////////////////////////////////////////////////////////////////////////////////

  posts(endpoint, data, UserToken) {
    return new Promise((resolve, reject) => {
      fetch(`${BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'api-access-token': UserToken,
          'Content-Type': 'multipart/form-data',
        },
        body: data,
      })
        .then(async res => {
          let response = await res.json();

          return resolve(response);
        })
        .catch(reject);
    });
  }

  //////////////////////////////////////////////////////////----PUT METHOD---////////////////////////////////////////////////////////////////////////////////////////////////////////////

  put(endpoint, data, UserToken) {
    return new Promise((resolve, reject) => {
      fetch(`${BASE_URL}${endpoint}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'api-access-token': UserToken,
        },
        body: data != null ? JSON.stringify(data) : null,
      })
        .then(async res => {
          let response = await res.json();

          if (!res.ok) {
            return reject(response);
          }
          return resolve(response);
        })
        .catch(reject);
    });
  }

  //////////////////////////////////////////////////////////----PATCH METHOD---////////////////////////////////////////////////////////////////////////////////////////////////////////////

  patch(endpoint, data, UserToken) {
    console.log('patchFile END URL::', `${BASE_URL}${endpoint}`);
    return new Promise((resolve, reject) => {
      fetch(`${BASE_URL}${endpoint}`, {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'api-access-token': UserToken,
        },
        body: data != null ? JSON.stringify(data) : null,
      })
        .then(async res => {
          let response = await res.json();

          if (!res.ok) {
            return reject(response);
          }
          return resolve(response);
        })
        .catch(reject);
    });
  }

  //////////////////////////////////////////////////////////----POST FILE METHOD---////////////////////////////////////////////////////////////////////////////////////////////////////////////

  postFile(endpoint, data, UserToken) {
    console.log('POSTFile END URL::', `${BASE_URL}${endpoint}`);

    return new Promise((resolve, reject) => {
      RNFetchBlob.fetch(
        'POST',
        `${BASE_URL}${endpoint}`,
        {
          'api-access-token': UserToken,
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json',
        },
        data,
      )
        .then(async res => {
          let response = await res.json();

          return resolve(response);
        })
        .catch(reject);
    });
  }

  //////////////////////////////////////////////////////////----DELETE METHOD---////////////////////////////////////////////////////////////////////////////////////////////////////////////

  delete(endpoint, UserToken) {
    return new Promise((resolve, reject) => {
      fetch(
        `${BASE_URL}${endpoint}`,

        {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'api-access-token': UserToken,
          },
        },
      )
        .then(async res => {
          let response = await res.json();

          if (!res.ok) {
            return reject(response);
          }
          return resolve(response);
        })
        .catch(reject);
    });
  }
};

export {APIClient};
