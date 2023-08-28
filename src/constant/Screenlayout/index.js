import {Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const fontScale = Dimensions.get('screen').fontScale;

export const ScreenLayouts = {
  screenWidth: width,
  screenHeight: height,
  fontScale: fontScale,
};