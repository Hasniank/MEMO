import {StyleSheet} from 'react-native';
import {ScreenLayouts} from '../../constant/Screenlayout';

export const Styles = ({} = {}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1F1D28',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textContainer: {
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    skipText: {
      fontSize: 15,
      color: '#60D88B',
    },
    Image: {
      width: ScreenLayouts.screenWidth * 0.8,
      height: ScreenLayouts.screenHeight * 0.4,
    },
    ButtonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
