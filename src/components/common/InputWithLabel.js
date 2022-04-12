import React, { useState } from 'react';
import {
  TextInput,
  Platform,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { OptionsModal } from './OptionsModal';
import { Colors, Images,Fonts } from '../../theme';

export const InputWithLabel = ({
  placeholderTextColor,
  customInputStyle,
  value,
  LabelColor,
  onChangeText,
  placeHolder,
  secureTextEntry,
  keyboardType,
  inputCutsomStyle,
  editable,
  onEndEditing,
  testID,
  accessibilityLabel,
  onPress,
  label,
  rightView,
  optionList,
  onItemSelect,
  maxLength,
  multiline,
  listItemKeyName,
  returnKeyType,
  onSubmitEditing,
  refs,
  blurOnSubmit,
  coinList,
  coin_name,
  color,
  screenLable
  
}) => {
  const { inputStyle, inputButtonBlock, containerStyle, labelStyle } = styles;
  const [filterOption, toggleFilterOption] = useState(false);

  return (
    <View style={[containerStyle, inputCutsomStyle]}>
      <TouchableOpacity
        activeOpacity={1}
        style={inputButtonBlock}
        onPress={
          optionList?.length > 0 ? () => toggleFilterOption(true) : onPress
        }>
        {label && <Text style={[labelStyle,{color:LabelColor,marginLeft:label=='Phone Number'? 8:0}]}> {label} </Text>}
        <View>
          <TextInput
            autoCapitalize='none'
            ref={refs}
            blurOnSubmit={blurOnSubmit}
            returnKeyType={returnKeyType}
            testID={testID}
            maxLength={maxLength}
            multiline={multiline}
            accessible
            accessibilityLabel={accessibilityLabel}
            secureTextEntry={secureTextEntry}
            value={value}
            placeholderTextColor={placeholderTextColor}
            placeholder={placeHolder}
            onChangeText={onChangeText}
            style={[inputStyle, customInputStyle]}
            keyboardType={
              keyboardType ||
              (Platform.OS === 'ios' ? 'ascii-capable' : 'visible-password')
            }
            editable={editable}
            onEndEditing={onEndEditing}
            keyboardAppearance="dark"
            onSubmitEditing={onSubmitEditing}
                 color={color}
          />
          {label == 'Password' || label == 'Confirm Password' ?
            <View
              style={{
                position: 'absolute',
                right: 15,
                top: 15
              }}>
              <Image
                style={{
                  width: 20,

                  height: 18.38,
                }}
                source={Images.eye_close}
              
              />
            </View> : null

          }
          {rightView && (
            <View
              style={{
                position: 'absolute',
                right: 0,
                paddingHorizontal: 10,
              }}>
              {rightView}
            </View>
          )}
          {optionList?.length > 0 && (
            <View
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: 0,
                right: 0,
              }}>
              <Image
                style={{
                  width: 13.5,
                  height: 8,
                  position: 'absolute',
                  right: 20,
                  top: 20,
                }}
                source={Images.eye_close}
              />
            </View>
          )}
          {coinList && (
          
              <View 
                style={{
                  position: 'absolute',
                  right: 0,
                  top:-12,
                  paddingHorizontal: 10,
              }}>
                <Text style={{  fontSize: 12,color:Colors.LabelColor,}}>{coin_name}</Text>
              </View>
          )}
          
        </View>
      </TouchableOpacity>
      <OptionsModal
        dataList={optionList}
        listItemKeyName={listItemKeyName}
        modalVisible={filterOption}
        onItemSelect={onItemSelect}
        onRequestClose={() => toggleFilterOption(false)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    flexGrow: 1,
  
    marginTop: 18,

  },
  inputButtonBlock: {

    justifyContent: 'center',
  },
  inputStyle: {
    width: '100%',
    height: 48,
    padding: 0,
    paddingHorizontal: 13,
    fontSize: 12,
    borderWidth: 1,
    backgroundColor:'grey',
    borderRadius: 12,
    borderColor: Colors.TextInputBackground,
  },
  counterBtns: {
    position: 'absolute',
    right: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputHelpButtonStyle: {
    marginLeft: 2,
  },
  labelStyle: {
    fontSize: 14,
    fontWeight:'bold',
    marginBottom: 5,
    color:'black',
  },
});
