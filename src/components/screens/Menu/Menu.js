import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Colors, Images, Fonts} from '../../../theme';
import styles from './MenuStyle';
import {HeaderMain} from '../../common';

const initialstate = [
  {
    id: '0',
    name: 'Pizza',
    qty: 0,
    checked: 0,
    price: '220',
  },
  {
    id: '1',
    name: 'Burger',
    qty: 0,
    checked: 0,
    price: '280',
  },
  {
    id: '2',
    name: 'Risotto',
    qty: 0,
    checked: 0,
    price: '300',
  },

  {
    id: '3',
    name: 'French Fries',
    qty: 0,
    checked: 0,
    price: '220',
  },
  {
    id: '4',
    name: 'Onion Rings',
    qty: 0,
    checked: 0,
    price: '280',
  },
  {
    id: '5',
    name: 'Fried Shrimps',
    qty: 0,
    checked: 0,
    price: '280',
  },

  {
    id: '6',
    name: 'Water',
    qty: 0,
    checked: 0,
    price: '220',
  },
  {
    id: '7',
    name: 'Coke',
    qty: 0,
    checked: 0,
    price: '280',
  },
  {
    id: '8',
    name: 'Beer',
    qty: 0,
    checked: 0,
    price: '280',
  },
  {
    id: '9',
    name: 'Cheese Cake',
    qty: 0,
    checked: 0,
    price: '220',
  },
  {
    id: '10',
    name: 'Ice Cream',
    qty: 0,
    checked: 0,
    price: '280',
  },
  {
    id: '11',
    name: 'Cheese Cake',
    qty: 0,
    checked: 0,
    price: '220',
  },
  {
    id: '12',
    name: 'Ice Cream',
    qty: 0,
    checked: 0,
    price: '280',
  },
];

export const Menu = () => {

  const [initialdata, setData] = useState(initialstate);
  const [dataArray, setDataArray] = useState([]);
  const [cartItems, setCartItems] = useState('');
  const [sectionTitle, setsectionTitle] = useState('');


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

  return (
    <>
      <SafeAreaView style={styles.root}>
        <HeaderMain
          cart={() => Actions.currentScene != 'Cart' && Actions.Cart({addeditem:dataArray})}
        />
        <View style={{height: '100%'}}>
          <View style={{height: '85%'}}>
            {initialdata != null || initialdata != undefined ? (
              <FlatList
                data={initialdata}
                keyExtractor={(item, index) => item.key}
                renderItem={_renderItem}
              />
            ) : null}
          </View>
          {dataArray.length > 0 ? (
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
                  Actions.currentScene != 'Cart' &&
                  Actions.Cart({addeditem: dataArray})
                }>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 18,
                  }}>
                  Add to Cart
                </Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </SafeAreaView>
    </>
  );
};
