import {View, Text} from 'react-native';
import React from 'react';
import {Style} from './style';

export const LineBar = ({label, value, maxValue}) => {
  const barWidth = (value / maxValue) * 100;
  return (
    <View style={Style().container}>
      <Text style={Style().label}>{label}</Text>
      <View style={Style().bar}>
        <View style={{...Style().fill, width: `${barWidth}%`}} />
      </View>
    </View>
  );
};
