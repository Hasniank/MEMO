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
    modalView: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: '#343141E5',
    },
    modalContainer: {
      backgroundColor: '#1F1D28',
      width: ScreenLayouts.screenWidth * 1,
      // justifyContent: 'center',
      alignItems: 'center',
      height: ScreenLayouts.screenHeight * 0.43,
    },
    ModalTextContainer: {
      top: 40,
    },
    modalText1: {
      color: '#fff',
      fontSize: 17,
      textAlign: 'center',
    },
    modalText2: {
      color: '#fff',
      fontSize: 15,
      textAlign: 'center',
    },
    modalButtonContainer: {
      top: 70,
    },
    createButton: {
      width: ScreenLayouts.screenWidth * 0.95,
      height: ScreenLayouts.screenHeight * 0.06,
      backgroundColor: '#49AB6C',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#49AB6C',
      margin: 10,
    },
    doButton: {
      width: ScreenLayouts.screenWidth * 0.95,
      height: ScreenLayouts.screenHeight * 0.06,
      backgroundColor: '#343141',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      borderColor: '#343141',
    },
    createText: {
      color: '#FFF',
      fontSize: 15,
    },
    doText: {
      color: '#FFF',
      fontSize: 15,
    },
  });
