import {View, Text, TextInput} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/Ionicons';
import {Styles} from './Style';

export const CustomInput = ({icon, label,size,color}) => {
  return (
    <View style={Styles().container}>
      <View style={Styles().labelContainer}>
        <Text style={Styles().label}>{label}</Text>
      </View>
      <View style={Styles().inputContainer}>
        <TextInput  style={Styles().input} />
        {icon && <FontAwesome name={icon} size={size} color={color} />}
      </View>
    </View>
  );
};
