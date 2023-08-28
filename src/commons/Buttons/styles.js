import {StyleSheet} from 'react-native';

export const Styles = ({
  width,
  height,
  backgroundColor,
  borderWidth,
  borderColor,
  fontSize,
  color,
  borderRadius,
} = {}) =>
  StyleSheet.create({
    container: {
      //   flex: 1,
      width: width,
      height: height,
      backgroundColor: backgroundColor,
      borderWidth: borderWidth,
      borderColor: borderColor,
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: borderRadius,
      margin:5
    },
    text: {
      fontSize: fontSize,
      color: color,
    },
    image: {
      width: 30,
      height: 30,
    },
  });
