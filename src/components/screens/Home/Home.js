import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  Image,
  Modal,
  Dimensions,
  FlatList,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Colors, Images, Fonts} from '../../../theme';
import {HeaderMain} from '../../common';
import {ImageSlider} from 'react-native-image-slider-banner';
import styles from './HomeStyle';
import {SelectMemberModal} from '../../common'
import Singelton from '../../../Singleton'
import * as  Constants from '../../../Constants'
const width = Dimensions.get('screen').width - 24;
const screenHeight = Dimensions.get('window').height - 320;
export const Home = (props) => {
  const TableList = [
    {
      Table: '1',
      status: 'Booked',
      TableImg: Images.table,
    },
    {
      Table: '2',
      status: 'Booked',
      TableImg: Images.table,
    },
    {
      Table: '3',
      status: 'Not-Booked',
      TableImg: Images.table,
    },
    {
      Table: '4',
      status: 'Not-Booked',
      TableImg: Images.table,
    },
    {
      Table: '5',
      status: 'Not-Booked',
      TableImg: Images.table,
    },
    {
      Table: '6',
      status: 'Not-Booked',
      TableImg: Images.table,
    },
    {
      Table: '7',
      status: 'Booked',
      TableImg: Images.table,
    },
    {
      Table: '8',
      status: 'Not-Booked',
      TableImg: Images.table,
    },
  ];
  const [showMemberModal, setshowMemberModal] = useState(false);
  const [isbanner, setisbanner] = useState('0');
  const [refresh, toggleRefresh] = useState(new Date());
  useEffect(() => {
    var currentRoute = props.navigation.routeName;
    props.navigation.addListener('didFocus', event => {
      if (currentRoute === event.routeName) {
        toggleRefresh(new Date());
        Singelton.getInstance()
        .getData(Constants.IS_BANNER)
        .then(res => {
          setisbanner(res)
        });
      }
    });
   
  }, [refresh]);
  const renderItem = item => {
    return (
      <TouchableOpacity
        onPress={() => item.status == 'Booked' ?Actions.Categories(): setshowMemberModal(true)}>
        <View
          style={{
            //marginVertical: 5,
            // marginHorizontal: 5,
            alignItems: 'center',
          }}>
          <Image
            style={{
              height: 120,
              width: 120,
              tintColor: item.status == 'Booked' ? 'grey' : null,
            }}
            source={item.TableImg}
          />
          <Text
            style={{
              color: item.status == 'Booked' ? 'red' : 'white',
              fontSize: 14,
              fontStyle:'normal',
              fontWeight:'bold',
              position: 'absolute',
              top: 50,
            }}>
            {item.status}
          </Text>
          <Text
            style={{
              color: item.status == 'Booked' ? 'red' : 'white',
              fontSize: 18,
              fontStyle:'normal',
              fontWeight:'bold',
              position: 'absolute',
              top: 65,
            }}>
            Table: {item.Table}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const HeaderView = () =>{
    return(
      <View>
      {isbanner == 'theme1' ?
      <View style={{marginTop: 15}}>
        <ImageSlider
          data={[
            {img: Images.banner},
            {img: Images.banner},
            {img: Images.banner},
            {img: Images.banner},
          ]}
          localImg={true}
          caroselImageContainerStyle={{
            height: 140,
            // paddingHorizontal: 10,
          }}
          caroselImageStyle={{
            width: width,
            resizeMode: 'cover',
            height: 140,
            borderRadius: 8,
          }}
          // previewImageStyle={{height:100}}
          activeIndicatorStyle={{
            height: 4,
            width: 20,
            backgroundColor: 'grey',
          }}
          inActiveIndicatorStyle={{
            backgroundColor: 'green',
            height: 4,
            width: 8,
          }}
          indicatorContainerStyle={{
            position: 'absolute',
            bottom: -40,
            alignSelf: 'center',
          }}
          autoPlay={true}
          //  onItemChanged={(item) => console.log("item", item)}
          closeIconColor="#fff"
        />
      </View> :null}

      <View style={{marginVertical: 24}}>
        <Text style={{fontSize: 20, color: 'green'}}>
          Select Your Table and Enter your Members
        </Text>
      </View>
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar backgroundColor={'green'} barStyle="light-content" />
      <HeaderMain  
        cart ={() => Actions.currentScene !='Cart'&& Actions.Cart()}
      />
      <View style={{paddingHorizontal: 16}}>
     
        <View style={{}}>
          <FlatList
            data={TableList}
            columnWrapperStyle={{
              justifyContent: 'space-between',
            }}
            style={{ marginBottom: 80}}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => String(index)}
            renderItem={({item}) => renderItem(item)}
            ListHeaderComponent={()=>HeaderView()}
           
          />
        </View>
      </View>
      <SelectMemberModal
      onDismiss={() =>setshowMemberModal(false)}
      visible={showMemberModal}
      />
    </SafeAreaView>
  );
};
