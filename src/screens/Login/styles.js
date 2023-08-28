import {StyleSheet} from 'react-native';
import {ScreenLayouts} from '../../constant/Screenlayout';

export const Styles = ({} = {}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1F1D28',
      justifyContent: 'center',
      alignItems: 'center',
      // width: ScreenLayouts.screenWidth * 1,
      // height: ScreenLayouts.screenHeight * 1,
    },
    textContainer: {
      justifyContent: 'space-between',
      alignItems: 'center',
      width: ScreenLayouts.screenWidth * 0.95,
    },
    SkipButton: {
      marginLeft: 'auto',
    },
    skipText: {
      fontSize: 20,
      color: '#60D88B',
    },
    ImageContainer: {
      width: ScreenLayouts.screenWidth * 0.9,
    },
    Image: {
      // width: ScreenLayouts.screenWidth * 0.9,
      // height: ScreenLayouts.screenHeight * 0.6,
    },
    ButtonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
