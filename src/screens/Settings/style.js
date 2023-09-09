import {StyleSheet} from 'react-native';
import {ScreenLayouts} from '../../constant/Screenlayout';

export const Styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1F1D28',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: ScreenLayouts.screenWidth * 0.9,
      height: ScreenLayouts.screenHeight * 0.1,
      alignItems: 'center',
    },
    settingText: {
      color: '#fff',
    },
    mainContainer: {
      width: ScreenLayouts.screenWidth * 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      width: ScreenLayouts.screenWidth * 1,
      justifyContent: 'center',
      alignItems: 'flex-start',
    },

    buttonContainerText: {
      color: '#ADA7C1',
    },
    button: {
      width: ScreenLayouts.screenWidth * 0.9,
      backgroundColor: '#343141',
      flexDirection: 'row',
      height: ScreenLayouts.screenHeight * 0.06,
      justifyContent: 'space-around',
      alignItems: 'center',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#343141',
      margin: 5,
    },
    buttonText: {
      color: '#fff',
    },
    logOutButton: {
      backgroundColor: '#343141',
      height: ScreenLayouts.screenHeight * 0.06,
      width: ScreenLayouts.screenWidth * 0.9,
      margin: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logOutText: {
      color: '#fff',
    },
    deleteButton: {
      backgroundColor: '#343141',
      height: ScreenLayouts.screenHeight * 0.06,
      width: ScreenLayouts.screenWidth * 0.9,
      margin: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    deleteText: {
      color: '#fff',
    },
  });
