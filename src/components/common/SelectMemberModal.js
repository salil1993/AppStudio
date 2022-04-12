import React, {useCallback, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Modal,
  SafeAreaView,
} from 'react-native';
import {InputWithLabel, LoaderView, Button} from '../common';
import {Colors, Images} from '../../theme';
import { Actions } from 'react-native-router-flux';

export const SelectMemberModal = ({visible, onDismiss}) => {
  if (!visible) return null;
 const [member, setMember] = useState('');

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        onDismiss();
      }}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.btnContainer}>

          <Text
            style={{
              color:'white',
              fontSize: 22,
              fontStyle:'normal',
              fontWeight:'bold',
              marginTop:30,
              alignSelf:'center'
            }}>
            Book your table
          </Text>
          <InputWithLabel
              LabelColor={'white'}
              returnKeyType={'go'}
              customInputStyle={{
                backgroundColor: 'white',
                borderColor: 'grey',
                color: 'white',
              }}
              color={'black'}
              testID={'Member'}
              editable={true}
              label={'Enter No. of Members'}
              accessibilityLabel={'Enter No. of Members'}
              placeHolder={'Enter No. of Members'}
              placeholderTextColor={'black'}
              keyboardType={'numeric'}
              value={member}
              onChangeText={text => {
                setMember(text);
              }}
              onSubmitEditing={() => {}}
            />
            <Button containerStyle={{backgroundColor:'red'}} text={'Submit'} onPress={() => Actions.Categories()} />
          </View>
          <Pressable
            onPress={onDismiss}
            style={ styles.crossBtnContainer}>
            <Image
              resizeMode="cover"
              source={Images.crossIcon}
              style={{width: 16, height: 16, tintColor:'black'}}
            />
          </Pressable>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // width: '100%',
    // height: '100%',
     flex: 1,
     marginTop:220,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    backgroundColor: '#008000' + 'CC',
   // justifyContent: 'flex-end',
    paddingVertical: 10,
    alignItems: 'center',
    zIndex: 1000,
  },
  btnContainer: {
    height:'80%',
    width: '90%',
   // flexDirection: 'row',
   // justifyContent: 'space-between',
    marginBottom: 16,
  },
  btn: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: '46%',
    borderRadius: 8,
    backgroundColor: Colors.SecondaryDark,
  },
  btnText: {
    fontSize: 14,
    color: Colors.Primary,
    fontWeight: 'bold',
  },
  crossBtnContainer: {
    width: 72,
    justifyContent: 'flex-end',
    height: 72,
    borderRadius: 40,
    alignItems: 'center',
    backgroundColor:'white',
    justifyContent: 'center',
    borderWidth: 0,
  },
});
