import React, { Component } from 'react';
import NetInfo from '@react-native-community/netinfo';
import Router from './Router';
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import FlashMessage from 'react-native-flash-message';

String.prototype.capitalize = function () {
  let temp = this.toLowerCase();
  return temp.charAt(0).toUpperCase() + temp.slice(1);
};

export default class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

 

  componentDidMount() {
    this.unsubscribeNetInfo = NetInfo.addEventListener(state => {
      this.checkConnection(state);
    });

  }

  componentWillUnmount() {
    this.unsubscribeNetInfo && this.unsubscribeNetInfo();
  }

  checkConnection = state => {
    console.log('Internet State: ', state);
    global.isConnected = state.isConnected;
    global.isInternetReachable =
      state.isInternetReachable == null ? true : state.isInternetReachable;
  };

  render() {
    return (
      <Provider store={store}>
        <Router
         forceRefresh={true} />
             <FlashMessage position="bottom" />
      </Provider>
    )
  }
}