import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const OptionsModal = ({
  modalVisible,
  onItemSelect,
  onRequestClose,
  dataList,
  dialogStyle,
  itemStyle,
  textStyle,
  listItemKeyName
}) => {
  if(!modalVisible)
    return null
  return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          onRequestClose();
        }}>
        <TouchableOpacity
          onPress={() => onRequestClose()}
          activeOpacity={1}
          style={styles.centeredView}>
          <TouchableOpacity
            onPress={() => {}}
            activeOpacity={1}
            style={[styles.modalView,dialogStyle]}>
            <FlatList
              showsVerticalScrollIndicator={false}
              style={{flexGrow: 0, maxHeight: hp(90)}}
              data={dataList}
              renderItem={({item, index}) => {
                return (
                  <Pressable
                    style={[styles.button, itemStyle]}
                    onPress={() => {
                      onItemSelect(item, index);
                      onRequestClose();
                    }}>
                    <Text style={[styles.textStyle, textStyle]}>
                      {listItemKeyName ? item[listItemKeyName] : item}
                    </Text>
                  </Pressable>
                );
              }}
              keyExtractor={(item,index )=> index + ''}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    flex: 1,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    backgroundColor: 'rgba(250,250,250,0.5)',
    padding: 5,
    borderBottomColor: 'rgba(200,200,200,0.5)',
    borderBottomWidth: 1,
    width: 300,
  },
  textStyle: {
    padding: 7,
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
  }
});
