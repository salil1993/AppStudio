import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Colors, Images, Fonts} from '../../../theme';
import {HeaderMain, SettingLabel, Button} from '../../common';
import styles from './SettingsStyle';
import Singelton from '../../../Singleton';
import * as Constants from '../../../Constants';

export const Settings = props => {
  const [isbannerEnabled, setisbannerEnabled] = React.useState('0');
  const [refresh, toggleRefresh] = useState(new Date());
  useEffect(() => {
    var currentRoute = props.navigation.routeName;
    props.navigation.addListener('didFocus', event => {
      if (currentRoute === event.routeName) {
        toggleRefresh(new Date());
        Singelton.getInstance()
          .getData(Constants.IS_BANNER)
          .then(res => {
            {
              res == 'theme1' ? setisbannerEnabled(1) : setisbannerEnabled(0);
            }
          });
      }
    });
  }, [refresh]);

  const logOut = () => {
    Alert.alert(
      '',
      'Are you sure you want to signout your account?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'No',
        },
        {
          text: 'Yes',
          onPress: () => clearStorage(),
        },
      ],
      {cancelable: false},
    );
  };

  const clearStorage = () => {
    Singelton.getInstance().clearStorage();
    Actions.Welcome();
  };

  const setbannerfunc = value => {
    //setisbannerEnabled('1'),
    console.log('value----------', value);
    Singelton.getInstance().saveData(Constants.IS_BANNER, value);
  };

  return (
    <SafeAreaView style={styles.root}>
      <HeaderMain
        cart={() => Actions.currentScene != 'Cart' && Actions.Cart()}
      />
      <View>
        <SettingLabel
          textStyle={{color: 'green'}}
          labletext={'Active Banner'}
          labl_imgstyle={styles.currencyDisplayStyle}
          lineBgColor={{
            backgroundColor: 'grey',
          }}
          lableiconStyle={{
            backgroundColor: 'white',
          }}
          onswitchpress={value => setbannerfunc(value)}
          screen_name={'setting'}
          sub_text={'banner'}
          isToggleEnabled_props={isbannerEnabled}
        />

      </View>

      
      <View style={styles.logoutView}>
          <Button
            textStyle={{ fontSize: 18}}
            text={'Logout'}
            onPress={() => logOut()}
            containerStyle={styles.logoutButtonContainer}
          />
        </View>
    </SafeAreaView>
  );
};
