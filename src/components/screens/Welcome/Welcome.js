import React, {useState, useEffect} from 'react';
import{View,SafeAreaView, StatusBar, Text, Image,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Colors, Images, Fonts} from '../../../theme';
import { Header } from '../../common';
import styles from './WelcomStyle';



export const Welcome = () =>{

    useEffect(() =>{
        setTimeout(()=>{
         Actions.URLScreen()
        }, 2000);
    })
 
    return(
         <SafeAreaView style={styles.root}>
        <Image style={{ width: 320, height: 110}} source={Images.logo}/>
        </SafeAreaView>  
    )
}