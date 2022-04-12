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
import SwitchSelector from 'react-native-switch-selector';
// source={{uri: lableicon,
const options = [
  {value: 'theme2', imageIcon: {}},
  {value: 'theme1'},
];
export const SettingLabel = ({
  labletext,
  lableiconStyle,
  textStyle,
  onPress,
  onswitchpress,
  lableicon,
  lableRighttext,
  labl_imgstyle,
  lineBgColor,
  screen_name,
  isToggleEnabled_props,
  sub_text,
}) => {
  const renderSwitch = () => {
    return (
      <SwitchSelector
        style={{  }}
        backgroundColor="#E2E6F1"
        height={25}
        textColor="#2196F3"
        buttonColor="#2196F3"
        selectedColor="#fff"
        options={options}
        initial={isToggleEnabled_props}
        value={isToggleEnabled_props}
        onPress={onswitchpress}
      />
    );
  };

  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, lableiconStyle]}>
      <View
        style={{
          width: '100%',
          height: 55,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: screen_name == 'security' ? 0 : '10%',
            height: 55,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
        
        </View>

        <View
          style={{
            width: screen_name == 'security' ? '42%' : '50%',
            height: 55,
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          <Text
            style={[
              {
                color: Colors.White,
                fontSize: 14,
                fontFamily: Fonts.PoppinsSemiBold,
              },
              textStyle,
            ]}>
            {labletext}
          </Text>
        </View>

        <TouchableOpacity
          disabled={sub_text == 'touch_id' ? true : false}
          onPress={onPress}
          style={{
            width: screen_name == 'security' ? '52%' : '32%',
            height: 55,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: screen_name == 'security' ? '87%' : '77%',
              alignItems: 'flex-end',
            }}>
            <Text
              style={[
                {
                  color: Colors.GrayLight,
                  fontSize: 12,
                  marginRight: 3,
                  fontFamily: Fonts.PoppinsMedium,
                },
                textStyle,
              ]}>
              {lableRighttext}
            </Text>
          </View>
          {screen_name == 'setting' && sub_text == 'banner' ? (
            <View style={{width: '40%', marginRight: 30}}>
              {renderSwitch()}
            </View>
          ) : (
            <View style={{width: '30%'}}>
           
            </View>
          )}
        </TouchableOpacity>
      </View>
      <View style={[styles.lineView, lineBgColor]}></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.PrimaryDark,
    height: 55,
    marginTop: 5,
  },
  lableimg_style: {
    width: 24,
    height: 24,
    marginEnd: 10,
  },
  lineView: {
    width: '95%',
    height: 0.5,
    backgroundColor: '#fff',
  },
});
