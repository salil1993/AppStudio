import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../theme";

export default StyleSheet.create({
    root:{
        backgroundColor:Colors.backgroundcolor,
        flex:1,
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
        marginLeft: 16,
        marginTop: 20,
        fontSize: 22,
        color: 'red',
        alignSelf:'center',
        fontFamily:'Coachin',
      //  fontFamily: Fonts.PoppinsSemiBold,
    },
    SubHeaderText: {
        fontWeight: '400',
        fontSize: 16,
        color: 'black',
        marginTop:30,
        alignSelf:'center',
        fontFamily: Fonts.PoppinsRegular,
    },
})