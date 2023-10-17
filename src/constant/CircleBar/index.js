import React from 'react';
import {View} from 'react-native';
import {Style} from './style';

export const CircleBar = ({radius, progress}) => {
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (progress / 100) * circumference;

  return (
    <View style={[Style().container, {width: 2 * radius, height: 2 * radius}]}>
      <View
        style={[
          Style().circle,
          {
            width: 2 * radius,
            height: 2 * radius,
            borderRadius: radius,
            borderWidth: radius / 10,
            borderColor: '#9C80EA',
            transform: [{rotate: '90deg'}],
          },
          {transform: [{rotate: `${progress * 9.6}deg`}]},
        ]}
      />
    </View>
  );
};
