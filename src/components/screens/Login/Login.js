import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Colors, Fonts, Images} from '../../../theme';
import styles from './LoginStyle';
import {InputWithLabel, Button, PasswordInput, LoaderView} from '../../common';
import {emailRegex, passwordRegEx} from '../../../Utils';
import {useSelector, useDispatch} from 'react-redux';
import {showMessage} from 'react-native-flash-message';
import Singleton from '../../../Singleton';
import {COMMON_URL} from '../../../EndPoints';
import {userLogin} from '../../../Redux/Actions'

export const Login = props => {
  const dispatch = useDispatch();
  const [showPassVisible, setShowPassVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setalertMessage] = useState('');
  const [Loader, setLoader] = useState(false);

  const showHidePassword = () => {
    setShowPassVisible(!showPassVisible);
  };

  useEffect(() => {
   
  }, []);

  const validateField = () => {
    //  console.log('logg_is_working====');

    if (!emailRegex.test(email.replace(/\s/g, ''))) {
      showMessage({
        message: 'Enter valid email address',
        backgroundColor: 'red',
        autoHide: true,
        type: 'success',
        onPress: () => {
          console.log('view pressed');
        },
      });
    } else if (password.length == 0) {
      showMessage({
        message:
          'Please Enter Password minimum 4 letters',
        backgroundColor: 'red',
        autoHide: true,
        type: 'success',
        onPress: () => {
          console.log('view pressed');
        },
      });
    } else {
       userLoginFunction()
    }
  };

    const userLoginFunction = () => {
      setLoader(true);
      let data = {
        userName: email,
        password: password
      };
      dispatch(userLogin(data))
        .then(response => {
         setLoader(false);
         if(response.status == 2){
          showMessage({
            message: response.message,
            backgroundColor:'red',
            autoHide: true,
            type: 'success',
            onPress: () => {
              console.log('view pressed');
            },
          });
         }else{
          showMessage({
            message: response.message,
            backgroundColor:'green',
            autoHide: true,
            type: 'success',
            onPress: () => {
              console.log('view pressed');
            },
          });
          Actions.Home()
         }
        })
        .catch(error => {
          setLoader(false);
          showMessage({
            message: error,
            backgroundColor:'red',
            autoHide: true,
            type: 'success',
            onPress: () => {
              console.log('view pressed');
            },
          });
          console.log('erroe', error);
        });
    };

  return (
    <>
      <SafeAreaView style={styles.root}>
        <StatusBar backgroundColor={'white'} barStyle="light-content" />
        <View style={[styles.ViewMainContainer]}>
          <Text style={[styles.HeaderText, ,]}>Welcome to AppStudio99 Mobile POS</Text>

          <Image style={{width: 320, height: 110}} source={Images.logo} />
          <Text style={[styles.SubHeaderText]}>
            Log in now to get started !
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
              label={'Email Address'}
              placeholderTextColor={'white'}
              accessibilityLabel={'Email Address'}
              placeHolder={'Enter Your Email Address'}
              keyboardType={'default'}
              value={email}
              onChangeText={text => {
                setEmail(text.replace(/\s+/g, ''));
              }}
              onSubmitEditing={() => {}}
            />

            <PasswordInput
              returnKeyType={'go'}
              customInputStyle={{
                backgroundColor: 'grey',
                borderColor: 'grey',
                color: 'white',
              }}
              testID={'Password'}
              label={'Password'}
              color={'white'}
              hideHintBtn={showPassVisible}
              secureTextEntry={showPassVisible ? true : false}
              editable={true}
              placeHolder={'Enter your password'}
              keyboardType={'default'}
              maxLength={15}
              value={password}
              placeholderTextColor={'white'}
              onChangeText={text => {
                setPassword(text);
              }}
              onSubmitEditing={() => {
                //  onContinueClick(email);
              }}
              onEyeClick={() => showHidePassword()}
            />

            <Pressable
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 12,
                marginBottom: 54,
              }}
              onPress={() => Actions.Forgot()}>
              <Text style={styles.bluetext}>{'Forgot password?'}</Text>
            </Pressable>

            <Button text={'Log in'} onPress={() => validateField()} />
          </View>
        </View>
         <LoaderView isLoading={Loader} /> 
      </SafeAreaView>
    </>
  );
};
