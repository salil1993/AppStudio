import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, StatusBar, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Singleton from '../../../Singleton';
import { Colors, Images, Fonts } from '../../../theme';
import { Header } from '../../common';
import styles from './WelcomStyle';
import * as Constants from '../../../Constants';


export const Welcome = () => {

    useEffect(() => {
        Singleton.getInstance().getData(Constants.IS_LOGIN).then(res => {
            if (res == 'isLogin') {
                Actions.Home()
            } else {
                setTimeout(() => {
                    Actions.URLScreen()
                }, 2000);
            }
        })

    })

    return (
        <SafeAreaView style={styles.root}>
            <Image style={{ width: 320, height: 110 }} source={Images.logo} />
        </SafeAreaView>
    )
}