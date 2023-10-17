import {StyleSheet} from 'react-native';
import {ScreenLayouts} from '../../constant/Screenlayout';
import {IMAGE} from '../../assets';

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
      width: ScreenLayouts.screenWidth * 0.95,
      flexDirection: 'row',
    },
    SkipButton: {},
    skipText: {
      fontSize: 20,
      color: '#60D88B',
      fontFamily: 'RobotoMono-Thin',
    },
    ImageContainer: {
      width: ScreenLayouts.screenWidth * 0.9,
      marginTop: 30,
    },
    Image: {},
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

      alignItems: 'center',
      height: ScreenLayouts.screenHeight * 0.43,
    },
    ModalTextContainer: {
      top: 40,
      width: ScreenLayouts.screenWidth * 0.9,
    },
    modalText1: {
      color: '#fff',
      fontSize: 17,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    modalText2: {
      color: '#fff',
      fontSize: 15,
      // textAlign: 'center',
      height: ScreenLayouts.screenHeight * 0.08,
      width: ScreenLayouts.screenWidth * 0.85,
      lineHeight: 25,
      letterSpacing: 1,
      marginTop: 40,
    },
    modalButtonContainer: {
      top: 70,
      justifyContent: 'center',
      alignItems: 'center',
    },
    createButton: {
      width: ScreenLayouts.screenWidth * 0.9,
      height: ScreenLayouts.screenHeight * 0.06,
      backgroundColor: '#49AB6C',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#49AB6C',
      margin: 10,
      borderRadius: 5,
    },
    doButton: {
      width: ScreenLayouts.screenWidth * 0.9,
      height: ScreenLayouts.screenHeight * 0.06,
      backgroundColor: '#343141',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      borderColor: '#343141',
      borderRadius: 5,
    },
    createText: {
      color: '#FFF',
      fontSize: 15,
      fontWeight: 'bold',
    },
    doText: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 15,
    },
  });
