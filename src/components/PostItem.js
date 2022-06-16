import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { APP_COLORS } from "../styles/Colors";
import { APP_DIMENSIONS } from "../styles/Dimensions";
import { generateRandomNumber } from "../utils/Utilities";

const PostItem = ({item}) => (
  <View style={postItemStyles.parentView}>
    <Text style={{marginBottom:APP_DIMENSIONS.margin1}}>
      {item.id + ' : ' + item.body}
    </Text>

    <Text style={{fontWeight:'bold'}}>
      {'Random Number : '+ generateRandomNumber()}
    </Text>
  </View>
)

export default PostItem;

const postItemStyles = StyleSheet.create({
  parentView : {
    marginVertical : APP_DIMENSIONS.borderRadius,
    backgroundColor : APP_COLORS.primaryColorOpacity,
    paddingVertical : APP_DIMENSIONS.margin3,
    paddingHorizontal : APP_DIMENSIONS.margin2,
    borderRadius : APP_DIMENSIONS.borderRadius
  }
});
