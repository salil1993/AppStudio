import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts } from '../../../theme';

export default StyleSheet.create({
    root: {
        backgroundColor: 'white',
        flex:1
    },
    body: {
        justifyContent: 'center',
        flexGrow: 1
    },
    ViewMainContainer: {
        height: '100%',
        paddingHorizontal: 24,
        paddingVertical: 20,
        backgroundColor: Colors.PrimaryDark,
    },
    HeaderText: {
      marginLeft: 5,
      marginTop: 20,
      marginBottom: 30,
      fontSize: 18,
      fontWeight:"bold",
      color: 'red',
      alignSelf:'center',
        fontFamily:'Coachin',
      //  fontFamily: Fonts.PoppinsSemiBold,
    },
    SubHeaderText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
        marginTop:30,
        marginBottom:20,
        alignSelf:'center',
        fontFamily: Fonts.PoppinsRegular,
    },
    Tabtext: {
        fontSize: 17,
        marginLeft:8,
        color: '#1394DC',
        fontFamily: Fonts.PoppinsRegular,
    },
    detailText: {
        textAlign: "center",
        color: '#A7AEBF',
        marginVertical: 25
      },
      linkText: {
        color:'#1394DC',
        fontWeight: "bold",
      },
      bluetext:{
        fontWeight: '400',
        fontSize: 14,
        color: '#1394DC',
        fontFamily: Fonts.PoppinsRegular,
        marginLeft:15
      }



})