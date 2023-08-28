import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Styles} from './styles';

export const Button = ({
  text,
  onPress,
  width,
  height,
  backgroundColor,
  borderColor,
  borderWidth,
  fontSize,
  color,
  source,
  borderRadius
}) => {
  return (
    <TouchableOpacity
      style={
        Styles({width, height, backgroundColor, borderColor, borderWidth,borderRadius})
          .container
      }
      onPress={onPress}>
      <Image source={source} style={Styles().image} />
      <Text style={Styles({fontSize, color}).text}>{text}</Text>
      <View></View>
    </TouchableOpacity>
  );
};
