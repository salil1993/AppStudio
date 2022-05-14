import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../theme';

export default StyleSheet.create({
  root: {
    backgroundColor: Colors.backgroundcolor,
    flex: 1,
  },

  item: {
    //  backgroundColor: '#008000' + 'CC',
   // padding: 20,
    marginVertical: 8,
    alignItems:'center',
    justifyContent:'space-around',
    flexDirection:'row'
  },
  header: {
    fontSize: 22,
    backgroundColor: '#fff',
    fontWeight: 'bold',
    color: 'green',
  },
  title: {
    fontWeight: 'bold',
    alignItems:'flex-start',
    fontSize: 14,
    color: 'green',
  },
  subtitle: {
    fontWeight: 'bold',
    alignItems:'flex-start',
    fontSize: 12,
    color: 'grey',
  },
  txt_price: {
    fontWeight: 'bold',
    alignItems:'flex-start',
    fontSize: 14,
    color: 'black',
  },
});
