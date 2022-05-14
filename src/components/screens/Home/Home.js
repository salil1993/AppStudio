import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  Image,
  Button,
  Modal,
  Dimensions,
  FlatList,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Colors, Images, Fonts } from '../../../theme';
import { HeaderMain, LoaderView } from '../../common';
import { ImageSlider } from 'react-native-image-slider-banner';
import styles from './HomeStyle';
import { SelectMemberModal } from '../../common'
import Singelton from '../../../Singleton'
import * as  Constants from '../../../Constants'
const width = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('window').height - 320;
import { Table_data } from '../../../Redux/Actions'
import {useSelector, useDispatch} from 'react-redux';
import { showMessage } from 'react-native-flash-message';

export const Home = (props) => {
  const dispatch = useDispatch();
  // const TableList = [
  //   {
  //     Table: '1',
  //     status: 'Booked',
  //     TableImg: Images.table,
  //   },
  //   {
  //     Table: '2',
  //     status: 'Booked',
  //     TableImg: Images.table,
  //   },
  //   {
  //     Table: '3',
  //     status: 'Not-Booked',
  //     TableImg: Images.table,
  //   },
  //   {
  //     Table: '4',
  //     status: 'Not-Booked',
  //     TableImg: Images.table,
  //   },
  //   {
  //     Table: '5',
  //     status: 'Not-Booked',
  //     TableImg: Images.table,
  //   },
  //   {
  //     Table: '6',
  //     status: 'Not-Booked',
  //     TableImg: Images.table,
  //   },
  //   {
  //     Table: '7',
  //     status: 'Booked',
  //     TableImg: Images.table,
  //   },
  //   {
  //     Table: '8',
  //     status: 'Not-Booked',
  //     TableImg: Images.table,
  //   },
  // ];
  const [showMemberModal, setshowMemberModal] = useState(false);
  const [isbanner, setisbanner] = useState('0');
  const [Loader, setLoader] = useState(false);
  const [refresh, toggleRefresh] = useState(new Date());
  const [TableList, setTableList] = useState([]);
  useEffect(() => {
    var currentRoute = props.navigation.routeName;
    getTableDetails()
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


  const getTableDetails = () => {  
    Singelton.getInstance().getData(Constants.USERTOKEN)
    .then(res => {      
      setLoader(true);
      dispatch(Table_data(res))
      .then(response => {
        setLoader(false);
        console.log("this=>",response.list);
        setTableList(response.list);
      })
      .catch(error => {
        setLoader(false);
        console.log('error', error);

      });
    });  
    
  };



  const renderItem = item => {
    return (
      <TouchableOpacity
        onPress={() =>  (item.status==0 && item.invoiceAmount!=0)  ? Actions.Categories() : item.status===1?
          showMessage({
            message: 'This table has pending settlement',
            backgroundColor: 'red',
            autoHide: true,
            type: 'success'
            
          }) : setshowMemberModal(true)}>
        <View
          style={{
            //width:'100%',
            borderRadius:10, 
            borderColor:'grey',
            borderWidth:1,
            padding:5,
            marginVertical:5,
            marginHorizontal:4,
            alignItems: 'center',
         
          }}>
          <Image
            style={{
              height:90,
              width:90,
              tintColor: (item.status==0 && item.invoiceAmount!=0) ? null : item.status==1?'red': 'green',
            }}
            source= {Images.table}
          />

          <View>
          <Text
            style={{
              color: item.status == '0' ? 'green' : 'red',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: 'bold',
            }}>
             {item.tableName} 
          </Text>         
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const HeaderView = () => {
    return (
      <View>
        {isbanner == 'theme1' ?
          <View style={{ marginTop: 15 }}>
            <ImageSlider
              data={[
                { img: Images.banner },
                { img: Images.banner },
                { img: Images.banner },
                { img: Images.banner },
              ]}
              localImg={true}
              caroselImageContainerStyle={{
                height: 140,
                 paddingHorizontal: 10,
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
          </View> : null}

        <View style={{ marginVertical: 20 , alignItems:'center', right:2,borderBottomWidth:1, borderBottomColor:'#ccc',paddingBottom:10}}>
          <Text style={{ fontSize: 18, color: 'green' ,fontWeight:'bold' }}>
            Click on any table to place order
          </Text>
        </View>
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar backgroundColor={'green'} barStyle="light-content" />
      <HeaderMain
        cart={() => Actions.currentScene != 'Cart' && Actions.Cart()}
      />
    

        <View style={{ alignItems:'center', paddingBottom:20,}}>
          <FlatList
            data={TableList}
            columnWrapperStyle={{
             // justifyContent: 'space-around',
             paddingBottom:20,
              marginHorizontal:10,
            }}
            style={{  right:2}}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => renderItem(item)}
            ListHeaderComponent={() => HeaderView()}

          />
    

      </View>
      <LoaderView isLoading={Loader} />
      <SelectMemberModal
        onDismiss={() => setshowMemberModal(false)}
        visible={showMemberModal}
      />

    </SafeAreaView>
  );
};
