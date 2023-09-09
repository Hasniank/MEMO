import {StyleSheet} from 'react-native';

export const Styles = ({
  backgroundColor,
  width,
  height,
  color,
  fontSize,
} = {}) =>
  StyleSheet.create({
    container: {
      backgroundColor: backgroundColor,
      width: width,
      height: height,
      justifyContent:'center',
      alignItems:'center'
    },
    text: {
      fontSize: fontSize,
      color: color,
    },
  });
