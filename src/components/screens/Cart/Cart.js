import React, {useState, useEffect} from 'react';
import{View,SafeAreaView, FlatList, Text, Image,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Colors, Images, Fonts} from '../../../theme';
import { Header } from '../../common';
import styles from './CartStyle';



export const Cart = (props) =>{
    const [initialdata, setData] = useState(props?.addeditem);
    const [dataArray, setDataArray] = useState([]);
    const [cartItems, setCartItems] = useState('');
  
  
    const selectHandler = (index, value) => {
      const newItems = initialdata;
      console.log('newItemsIndex=========', newItems);
      console.log('newItemsValue=========', value);
      let data = [];
      //  console.log('newItemsChecked=========',  newItems.id)
      newItems[index].checked = value == 0 ? 1 : 0;
      setData(newItems);
      getAddedValues();
    };
  
    const quantityHandler = (action, index) => {
      const newItems = [...initialdata];
      let currentQty = newItems[index]['qty'];
      if (action == 'more') {
        newItems[index]['qty'] = currentQty + 1;
      } else {
        newItems[index]['qty'] =
          currentQty >= 1 ? currentQty - 1 : (newItems[index].checked = 0);
      }
      setCartItems(newItems);
    };
  
    const getAddedValues = () => {
      let addedArray = [];
      for (let item of initialdata) {
        if (item.checked == 1) {
          addedArray.push(item);
          setDataArray(addedArray);
        } else {
          console.log('addedArray===', addedArray);
        }
      }
      return addedArray;
    };
  
    const _renderItem = ({item, index}) => {
      return (
        <View style={[styles.item, {width: '100%'}]}>
          <View style={{width: '40%'}}>
            <Image
              style={{
                height: 100,
                width: 100,
                marginLeft: 20,
                borderRadius: 20,
              }}
              source={Images.food}
            />
          </View>
          <View
            style={{
              width: '30%',
              marginLeft: 10,
            }}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.txt_price}>Rs. 520</Text>
          </View>
          <View style={{width: '30%', alignItems: 'center'}}>
            {item.checked == 0 || item.qty < 0 ? (
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  borderColor: 'grey',
                  backgroundColor: 'grey',
                  borderRadius: 20,
                  height: 40,
                  width: 90,
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}
                onPress={() => selectHandler(index, item.checked)}>
                <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
                  Add
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  borderColor: 'grey',
                  backgroundColor: 'grey',
                  borderRadius: 20,
                  height: 40,
                  width: 90,
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}>
                <TouchableOpacity onPress={() => quantityHandler('less', index)}>
                  <Text
                    style={{color: 'white', fontSize: 26, fontWeight: 'bold'}}>
                    {' '}
                    -
                  </Text>
                </TouchableOpacity>
  
                <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
                  {item.qty}
                </Text>
  
                <TouchableOpacity onPress={() => quantityHandler('more', index)}>
                  <Text
                    style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
                    +
                  </Text>
                </TouchableOpacity>
              </TouchableOpacity>
            )}
          </View>
        </View>
      );
    };
  
    return(
       
        <SafeAreaView style={styles.root}>
            
         <Header header={'Cart'}/>
         <View style={{flex:1, height:'100%',alignContent:'center', justifyContent:'center'}}>
         {initialdata != null || initialdata != undefined ? (

             <View style={{height: '100%'}}>
          <View style={{height: '85%'}}>
              <FlatList
                data={initialdata}
                keyExtractor={(item, index) => item.key}
                renderItem={_renderItem}
              />
           
          </View>
            <View style={{height: '10%'}}>
              <TouchableOpacity
                style={{
                  borderRadius: 25,
                  // width:'80%',
                  height: 50,
                  marginHorizontal: 20,
                  backgroundColor: 'grey',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() =>
                  Actions.currentScene != 'Home' &&
                  Actions.Home()
                }>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 18,
                  }}>
                  Order your Food
                </Text>
              </TouchableOpacity>
            </View>
            </View>
            ) : <Text style={{ fontSize:24, alignSelf:'center',color:'green'}}>Oopsss Cart is Empty!!</Text>}
        </View>


        </SafeAreaView>
        
        
       
    )
}