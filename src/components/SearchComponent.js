import React, { useState } from "react";
import {View,StyleSheet,Image,TextInput,TouchableOpacity} from "react-native";
import { APP_COLORS } from "../styles/Colors";
import { APP_DIMENSIONS } from "../styles/Dimensions";

const SearchComponent = (props) => {

  const [value,setValue] = useState('');

  return (
    <View style={styles.parentView}>

      <TextInput style={styles.textInputStyle}
                 placeholder={'Search Here ...'}
                 value={value}
                 onChangeText={(text)=>{
                   setValue(text);
                 }}
                 onSubmitEditing={()=>{
                   props.onSearchPress(value);
                 }}/>

      <TouchableOpacity style={styles.buttonView}
                        onPress={()=>{
                          props.onSearchPress(value);
                        }}>

        <Image source={require('../assets/images/loupe.png')}
               style={styles.iconStyle} />

      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonView}
                        onPress={()=>{
                          props.onRefreshPress()
                        }}>

        <Image source={require('../assets/images/reload.png')}
               style={styles.iconStyle} />

      </TouchableOpacity>

    </View>
  )

}

export default SearchComponent;

const styles = StyleSheet.create({
  parentView : {
    height:APP_DIMENSIONS.inputHeight,
    marginVertical:APP_DIMENSIONS.margin3,
    padding:APP_DIMENSIONS.borderRadius,
    flexDirection:'row'
  },
  textInputStyle : {
    height:'100%',
    flex:1,
    borderWidth:1,
    borderRadius:APP_DIMENSIONS.borderRadius,
    borderColor:APP_COLORS.borderColor,
    backgroundColor:APP_COLORS.inputColor
  },
  buttonView : {
    height:APP_DIMENSIONS.buttonHeight,
    width:APP_DIMENSIONS.buttonHeight,
    borderRadius:APP_DIMENSIONS.borderRadius,
    backgroundColor:APP_COLORS.inputColor,
    marginLeft : APP_DIMENSIONS.margin2,
    alignItems:'center',
    justifyContent:'center'
  },
  iconStyle : {
    height:APP_DIMENSIONS.iconSize,
    width:APP_DIMENSIONS.iconSize
  }
})
