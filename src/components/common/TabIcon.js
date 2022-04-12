import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Fonts, Colors, Images } from "../../theme";

const TabIcon = (props) => {
  return (
    <View style={styles.viewMainContainer}>
      <Image
        source={props.focused ? props.activeImg : props.defaultImg}
        style={[props.ImgSize,{tintColor:props.focused ?'green':'white'}]}
      />
      <Text
        style={[
          styles.titleText,
          {
            color: props.focused
              ? 'green'
              : 'white',
          },
        ]}
      >
        {props.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewMainContainer: {
    
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "green",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.84,
  },
  titleText: {
    paddingTop: 5,
    textAlign: "center",
    fontSize: 10,
   fontWeight:'bold',
    textTransform: "uppercase",
  },
});

export { TabIcon };

