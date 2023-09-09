import {StyleSheet} from 'react-native';
import {ScreenLayouts} from '../../constant/Screenlayout';

export const Style = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1F1D28',
    },
    header: {
      borderBottomWidth: 1,
      borderColor: '#4A465B',
      width: ScreenLayouts.screenWidth * 1,
      height: ScreenLayouts.screenHeight * 0.06,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
    },
    progressText: {
      color: '#fff',
    },
    mainContainer: {
      width: ScreenLayouts.screenWidth * 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    hourContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    hourContainer1: {
      width: ScreenLayouts.screenWidth * 0.4,
      height: ScreenLayouts.screenHeight * 0.2,
      borderWidth: 3,
      borderColor: '#343143',
      justifyContent: 'center',
      alignItems: 'center',
      margin:10
    },
    h2Text: {
      color: '#9C80EA',
      fontSize: 50,
      textAlign: 'right',
    },
    totalText: {
      fontSize: 20,
      textAlign: 'right',
      color: '#fff',
    },
  });
