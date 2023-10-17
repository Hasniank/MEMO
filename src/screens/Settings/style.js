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
      justifyContent: 'space-between',
      width: ScreenLayouts.screenWidth * 0.9,
      height: ScreenLayouts.screenHeight * 0.1,
      alignItems: 'center',
      paddingLeft: 13,
    },
    settingText: {
      color: '#fff',
      fontSize: 19,
    },
    accountContainer: {
      width: ScreenLayouts.screenWidth * 0.9,
      height: ScreenLayouts.screenHeight * 0.45,
      backgroundColor: '#343141',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    syncText: {
      fontSize: 20,
      color: '#fff',
    },
    createText: {
      fontSize: 16,
      color: '#ADA7C1',
      width: ScreenLayouts.screenWidth * 0.7,
      height: ScreenLayouts.screenHeight * 0.1,
      textAlign: 'center',
      marginTop: 10,
      lineHeight: 25,
    },
    createButton: {
      backgroundColor: '#846BCD',
      width: ScreenLayouts.screenWidth * 0.5,
      height: ScreenLayouts.screenHeight * 0.07,
      borderRadius: 5,
      color: '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
    },
    createButtonText: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 16,
    },
    mainContainer: {
      width: ScreenLayouts.screenWidth * 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      width: ScreenLayouts.screenWidth * 0.9,
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginTop: 25,
    },

    buttonContainerText: {
      color: '#ADA7C1',
      fontSize: 19,
      padding: 7,
    },
    button: {
      width: ScreenLayouts.screenWidth * 0.9,
      backgroundColor: '#343141',
      flexDirection: 'row',
      height: ScreenLayouts.screenHeight * 0.07,
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#343141',
      margin: 5,
      padding: 10,
    },
    buttonText: {
      color: '#FFFFFF',
    },
    logOutButton: {
      backgroundColor: '#343141',
      height: ScreenLayouts.screenHeight * 0.06,
      width: ScreenLayouts.screenWidth * 0.9,
      margin: 5,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    logOutText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    deleteButton: {
      backgroundColor: '#343141',
      height: ScreenLayouts.screenHeight * 0.07,
      width: ScreenLayouts.screenWidth * 0.9,
      margin: 5,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    deleteText: {
      color: '#FF5185',
      fontWeight: 'bold',
    },
    mainContainer2:{
      width: ScreenLayouts.screenWidth * 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });
