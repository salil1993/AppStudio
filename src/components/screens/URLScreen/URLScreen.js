import React, {useState, useEffect} from 'react';
import{View,SafeAreaView, StatusBar, Text, Image,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Colors, Images, Fonts} from '../../../theme';
import { InputWithLabel, Button } from '../../common';
import styles from './URLScreenStyle';
import Singelton from '../../../Singleton'
import * as Constants from '../../../Constants'
import {showMessage, hideMessage} from 'react-native-flash-message';
import {COMMON_URL} from '../../../EndPoints';
export const URLScreen = (props) =>{
    const [website, setWebsite] = useState('');
    const [refresh, toggleRefresh] = useState(new Date());
    useEffect(() => {
      var currentRoute = props.navigation.routeName;
      props.navigation.addListener('didFocus', event => {
        if (currentRoute === event.routeName) {
          toggleRefresh(new Date())
        }
      });
   
    }, [refresh]);

    const saveurlfunc = () => {
      if(website.length == 0){
        showMessage({
            message: 'Enter Website url',
            backgroundColor: 'red',
            autoHide: true,
            type: 'success',
            onPress: () => {
              console.log('view pressed');
            },
          });
      }else{
        Singelton.getInstance().saveData(COMMON_URL, website)
        Actions.Login();
      }

    }


    return(
       <>
        <SafeAreaView style={styles.root}>
        <StatusBar backgroundColor={'white'} barStyle="light-content" />
        <View style={[styles.ViewMainContainer]}>
          <Text style={[styles.HeaderText, ,]}>Welcome to FoodBuzz</Text>

          <Image style={{width: 320, height: 110}} source={Images.logo} />
          <Text style={[styles.SubHeaderText]}>
            Log in now to eat your delicious Food !
          </Text>
          <View>
            <InputWithLabel
              returnKeyType={'go'}
              customInputStyle={{
               // backgroundColor: 'grey',
                borderColor: 'grey',
                color: 'white',
              }}
              color={'white'}
              testID={'Email'}
              editable={true}
              label={'Website Address'}
              placeholderTextColor={'white'}
              accessibilityLabel={'Website Address'}
              placeHolder={'Enter Your Site URL'}
              keyboardType={'default'}
              value={website}
              onChangeText={text => {
                setWebsite(text);
              }}
              onSubmitEditing={() => {}}
            />
            </View>
            <Button containerStyle={{marginTop:50}} text={'Save'} onPress={() => saveurlfunc()} />
            </View>

        </SafeAreaView>
        </>
        
       
    )
}