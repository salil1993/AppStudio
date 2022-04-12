import React from 'react';

import {View} from 'react-native';
import {showMessage, hideMessage} from 'react-native-flash-message';

export const ShowAlert = ({message,bgColor }) => {

  console.log('flashmessgae_log======', message);
 showMessage({
    message: message,
    backgroundColor:bgColor,
    autoHide: true,
    type: 'success',
    onPress: () => {
      console.log('view pressed');
    },
  })

  
  return showMessage
};
