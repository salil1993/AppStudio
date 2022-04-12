import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../theme";

export default StyleSheet.create({
    root:{
        backgroundColor:Colors.backgroundcolor,
        flex:1,
        height:'100%',
    },
    logoutView: {
        // height: '10%',
        marginBottom:30,
        flex:1,
        alignItems:'center',
       justifyContent:'flex-end'
     
      },
      logoutButtonContainer: {
        backgroundColor: 'green',
        height: 50,
        width: '90%',
      },
})