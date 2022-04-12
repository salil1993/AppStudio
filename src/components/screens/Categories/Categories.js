import React, {useState, useEffect} from 'react';
import{View,SafeAreaView, StatusBar, Text, Image,TouchableOpacity, FlatList} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Colors, Images, Fonts} from '../../../theme';

import styles from './CategoriesStyle';
import { HeaderMain } from '../../common';


export const Categories = () =>{
    const CategoriesList = [
        {
          Categories: 'Appetizers/Starters',
          CategoriesImg: Images.food,
        },
        {
          Categories: 'Breakfast',
          CategoriesImg: Images.food,
        },
        {
          Categories: 'Main Menu (Lunch/Dinner)',
          CategoriesImg: Images.food,
        },
        {
          Categories: 'Dessert',
          CategoriesImg: Images.food,
        },
        {
          Categories: 'Beverage',
          CategoriesImg: Images.food,
        }
      ];



      const renderItem = item => {
        return (
          <TouchableOpacity onPress={(() => Actions.CategoriesMenu({Items:item.Categories}))}>
            <View
              style={{
                alignItems: 'center',
                marginVertical:10,
                marginHorizontal:16

              }}>            
              <Image
                style={{
                  height: 120,
                  width:'100%',
                  borderRadius:15,
                  shadowColor:'#000'+'CC'
                }}
                source={item.CategoriesImg}
              />
              <Text
                style={{
                  color:'white',
                  fontSize: 26,
                  fontStyle:'normal',
                  fontWeight:'bold',
                  position: 'absolute',
                  top: 50,
                }}>
                {item.Categories}
              </Text>
            </View>
          </TouchableOpacity>
        );
      };
  
    return(
       
        <SafeAreaView style={styles.root}>
        <StatusBar backgroundColor={'green'} barStyle="light-content" />
         <HeaderMain  cart ={() => Actions.currentScene !='Cart'&& Actions.Cart()}/>
         <View>
         <FlatList
            data={CategoriesList}
            style={{flexShrink: 1, marginBottom: 60}}
            keyExtractor={(item, index) => String(index)}
            renderItem={({item}) => renderItem(item)}
          />
         </View>


        </SafeAreaView>
        
        
       
    )
}