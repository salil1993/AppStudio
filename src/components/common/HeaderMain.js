import React, {Component} from 'react';
import {Text, View, Image, Pressable, TouchableOpacity} from 'react-native';
import {Colors, Fonts, Images} from '../../theme';
import {Actions} from 'react-native-router-flux';
import {ThemeManager, LanguageManager} from '../../../ThemeManager';

const HeaderMain = ({container, usermain, search, cart}) => {
  return (
    <View
      style={
        (container,
        [
          {
            flexDirection: 'row',
            alignItems: 'center',
           // alignContent: 'center',
            paddingHorizontal: 16,
            backgroundColor:'green',
            paddingVertical: 8,
            justifyContent: 'flex-end',
          },
        ])
      }>
      

      <View style={{flexDirection: 'row'}}>
        <Pressable onPress={search}>
          <Image
            style={{height: 18, width: 18, padding: 5, marginRight: 25, tintColor:'white'}}
            source={Images.search}
          />
        </Pressable>

        <Pressable onPress={cart}>
          <Image
            style={{height: 22, width: 19, padding: 5, tintColor:'white'}}
            source={ Images.cart}
          />
        </Pressable>
      </View>
    </View>
  );
};

export {HeaderMain};
