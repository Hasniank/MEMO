import {View, Text, Image} from 'react-native';
import React from 'react';
import {IMAGE} from '../../assets';
import {ScreenLayouts} from '../../constant/Screenlayout';

export const SplashScreen = () => {
  return (
    <Image
      source={IMAGE.IMAGES.SplashImage}
      style={{
        flex: 1,

        width: ScreenLayouts.screenWidth * 1,
        height: ScreenLayouts.screenHeight * 1,
      }}
    />
  );
};
