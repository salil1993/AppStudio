import React from 'react';
import {
  TextInput,
  Image,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {Fonts, Colors} from '../../theme';


const LoaderView = ({isLoading}) => {
  if (isLoading == true) {
    return (
      <View style={styles.mainView}>
        <ActivityIndicator
          animating={isLoading}
          size={'large'}
          visible={isLoading}
          color={'green'}
        />

        <Text
          style={{
         
            color: 'white',
          }}>{`Loading...`}</Text>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  mainView: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(52, 52, 52, 0.4)',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});

export {LoaderView};
