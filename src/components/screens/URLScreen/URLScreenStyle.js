import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../theme";

export default StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:'#fff',opacity:0.9,
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
        fontSize: 14,
        color: 'black',
        marginLeft:0,
        marginRight:0,
        padding:0,
        marginTop:30,
        marginBottom:20,
        alignSelf:'center',
        fontFamily: Fonts.PoppinsRegular,
    },
})