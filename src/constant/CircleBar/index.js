import React from 'react';
import {View, Image} from 'react-native';
import {Svg, Circle} from 'react-native-svg';
import MaskedView from '@react-native-masked-view/masked-view';

export const CircleBar = ({value, size, color, image}) => {
  const circumference = (2 * Math.PI * size) / 2;
  const offset = circumference - (value / 100) * circumference;
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Svg height={size} width={size} viewBox={`0 0 ${size} ${size}`}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2}
          fill="none"
          stroke="#eee"
          strokeWidth={10}
        />
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2}
          fill="none"
          stroke={color}
          strokeWidth={10}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
        />
      </Svg>
      <MaskedView
        style={{position: 'absolute', width: size, height: size}}
        maskElement={
          <View
            style={{
              backgroundColor: 'transparent',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: size - 20,
                height: size - 20,
                borderRadius: (size - 20) / 2,
                backgroundColor: '#fff',
              }}
            />
          </View>
        }>
        <Image
          source={image}
          style={{width: size, height: size, resizeMode: 'cover',padding:15}}
        />
      </MaskedView>
    </View>
  );
};


