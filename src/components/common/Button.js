import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  Pressable,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Colors, Fonts, Images} from '../../theme';


export const Button = ({text, containerStyle, textStyle, onPress, icon,iconStyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, containerStyle]}>
      {icon && (
        // <Image resizeMode={'contain'} style={{width: 24, height: 24, marginEnd: 10}} source={icon} />
        <Image
        style={iconStyle}
        source={ icon}/>
      )}
      <Text style={[{color:'white', fontSize: 16,fontFamily:Fonts.interNormal}, textStyle]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor:'green',
    height: 48,
    borderRadius: 10,
   
  },
});