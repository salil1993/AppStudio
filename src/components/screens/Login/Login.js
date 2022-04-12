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
    Singleton.getInstance()
    .getData(COMMON_URL)
    .then(url => {
      console.log('url--------------',url)
    })
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
    } else if (!passwordRegEx.test(password)) {
      showMessage({
        message:
          'Please Enter Password that Contains 1 upper case letter1 Number, 1 Special Character & Should be of minimum length 8.',
        backgroundColor: 'red',
        autoHide: true,
        type: 'success',
        onPress: () => {
          console.log('view pressed');
        },
      });
    } else {
     // Actions.Home()
    }
  };

  //   const userLoginFunction = () => {
  //     setLoader(true);
  //     let data = {
  //       capReq: '',
  //       captchatext:
  //         '03AGdBq276Qu7FlbMy89PRp-DibGE6oSkzuthsiscw6mPx8RlVBObp9tmEnMyMpkvURBe4GB10WcngA-8oVNhm03GyXtPHC6-M1PtMu7iE0UhIZXEqEYFsu7-xNoO1Tr8pEpPC2KAtrsHsh1T_cpUaimXMUrysNWcQsmzWi7XX_F4Z18Li__mxOs1PMTSNsc9I3M0p9l4wVA_VamsP1eRaCoGUFix5D58vnV9SCnlyCAb02xunVksiOYZT6g-GGZdK8K0niGqF5ubzekr07D5NoWVaKfjfWTpSSDehysctqsM3Bdv83wi5p39HLxKKxd1R_JGoV7__2tXf2OURYN9Ysgmu03Gz1jaIXNQHCu7MaBLvHQHrJyRpRaYq68t5ew7PO436GJFGMrCbQVxr5k-gCKKMgWdd_wuECCbAJ2Yh7WWpWcC1fdZnH5UihPh87BHGOrysS5IW3Gvj',
  //       device_type: 2,
  //       email: email,
  //       ip: ipAddress == undefined ? '10.1.4.180' : ipAddress,
  //       password: password,
  //       device: 'mobile',
  //     };
  //     dispatch(userLogin(data))
  //       .then(response => {
  //         setLoader(false);
  //         console.log('adminDEtails_success', response);
  //         {
  //           if (response.message == 'Welcome to Bitqik.') {
  //             Actions.Home();
  //             showMessage({
  //               message: response.message,
  //               backgroundColor: Colors.Green,
  //               autoHide: true,
  //               type: 'success',
  //               onPress: () => {
  //                 console.log('view pressed');
  //               },
  //             });
  //           } else {
  //             showMessage({
  //               message: response.message,
  //               backgroundColor: 'red',
  //               autoHide: true,
  //               type: 'success',
  //               onPress: () => {
  //                 console.log('view pressed');
  //               },
  //             });
  //           }
  //         }
  //       })
  //       .catch(error => {
  //         setLoader(false);
  //         showMessage({
  //           message: error,
  //           backgroundColor: Colors.Red,
  //           autoHide: true,
  //           type: 'success',
  //           onPress: () => {
  //             console.log('view pressed');
  //           },
  //         });
  //         console.log('adminDEtails_error', error);
  //       });
  //   };

  return (
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

            <Button text={'Log in'} onPress={() => Actions.Home()} />
          </View>
        </View>
        {/* <LoaderView isLoading={Loader} /> */}
      </SafeAreaView>
    </>
  );
};
