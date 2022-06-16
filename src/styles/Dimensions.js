import { Dimensions } from "react-native";

const {width, height}= Dimensions.get('window');

export const imageWidth = width;
export const imageHeight = 0.5625 * width;

export const APP_DIMENSIONS = {
  borderRadius : 8,
  inputHeight : 64,
  buttonHeight : 48,
  margin1 : 6,
  margin2 : 10,
  margin3 : 12,
  iconSize : 24
}
