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
import { Colors, Images } from '../../theme';

export const PasswordInput = ({
  placeholderTextColor,
  customInputStyle,
  value,
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
  hideHintBtn,
  onEyeClick,
  screenLable
}) => {
  const { inputStyle, inputButtonBlock, containerStyle, labelStyle } = styles;
  const [filterOption, toggleFilterOption] = useState(false);

  return (
    <View style={[containerStyle, inputCutsomStyle]}>

      {label && <Text style={[labelStyle, { marginLeft: label == 'Phone Number' ? 8 : 0 }]}> {label} </Text>}
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
          placeholder={placeHolder}
          placeholderTextColor={placeholderTextColor}
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
        />

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


          <View 
          style={{
            position: 'absolute',
            width: '20%',
            borderTopRightRadius: 12,
            borderBottomRightRadius:12,
            backgroundColor:'grey',
            height: '100%',
            right: 5,
           
           // top: 5
            }}>
              {hideHintBtn?
            <TouchableOpacity onPress={onEyeClick}>
            <Image
            style={{
              width: 16,
              height: 16,
              position: 'absolute',
              right: 15,
              top: 15,
              tintColor:'white'
            }}
            source={
             Images.eye_close
            }

          />
        </TouchableOpacity>
         :
         <TouchableOpacity
          onPress={onEyeClick}>
          <Image
            style={{
              width: 16,
              height: 16,
              position: 'absolute',
              right: 14.62,
              top: 15,
            }}
            source={
            Images.eye_open
            }
          />
        </TouchableOpacity>
        }
        </View>
      
      </View>

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
    marginTop: 10,
    width: '100%',
    
  },
  inputButtonBlock: {

    justifyContent: 'center',
  },
  inputStyle: {
    color:'white',
    padding: 10,
    paddingHorizontal: 13,
    fontSize: 14,
    borderWidth: 1,
    backgroundColor: Colors.TextInputBackground,
    width: '83%',
    height: 48,
    borderRadius: 12,
    borderColor: Colors.TextInputBackground,
  },
  counterBtns: {
    position: 'absolute',
    right: 8,
    // top: 13,
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
