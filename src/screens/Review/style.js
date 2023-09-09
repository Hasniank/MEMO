import {StyleSheet} from 'react-native';
import {ScreenLayouts} from '../../constant/Screenlayout';

export const Style = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1F1D28',
    },
    header: {
      justifyContent: 'space-between',
      alignItems: 'center',
      width: ScreenLayouts.screenWidth * 1,
      height: ScreenLayouts.screenHeight * 0.07,
      flexDirection: 'row',
      borderBottomWidth: 2,
      borderColor: '#343141',
    },
    reviewText: {
      color: '#fff',
      fontSize: 15,
    },
    mainContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: ScreenLayouts.screenWidth * 1,
      height: ScreenLayouts.screenHeight * 0.7,
    },
    noCollectionText: {
      color: '#fff',
      fontSize: 20,
      width: ScreenLayouts.screenWidth * 0.8,
      textAlign: 'center',
      paddingTop: 20,
    },
    collectionText: {
      color: '#928CA6',
      fontSize: 20,
      width: ScreenLayouts.screenWidth * 0.93,
      lineHeight: 25,
      letterSpacing: 3,
      textAlign: 'center',
      // height: ScreenLayouts.screenHeight * 0.3,
      padding: 30,
    },
    startButton: {
      width: ScreenLayouts.screenWidth * 0.5,
      height: ScreenLayouts.screenHeight * 0.06,
      backgroundColor: '#49AB6C',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    startButtonText: {
      color: '#fff',
      fontSize: 15,
    },
    reviewContainer: {
      alignItems: 'center',
      width: ScreenLayouts.screenWidth * 1,
      height: ScreenLayouts.screenHeight * 0.9,
    },
    reviewContainerInner: {
      width: ScreenLayouts.screenWidth * 0.93,
      height: ScreenLayouts.screenHeight * 0.15,
      borderWidth: 4,
      borderColor: '#ADA7C1',
      backgroundColor: '#343141',
      top: 30,
      borderRadius: 5,
      justifyContent: 'flex-start',
      paddingLeft: 20,
    },
    stateText: {
      fontSize: 10,
      color: '#C7C3DB',
    },
    tagContainer: {
      flexDirection: 'row',
    },
    tag: {
      width: ScreenLayouts.screenWidth * 0.14,
      height: ScreenLayouts.screenHeight * 0.02,
      backgroundColor: '#846BCD',
      justifyContent:'center',
      alignItems:'baseline'
    },
    tagText: {
      fontSize: 13,
      color: '#fff',
    },
    flutterText: {
      fontSize: 20,
      color: '#fff',
    },
    memoryText:{
      color:'#C7C3DB'
    },
    barContainer: {
      width: ScreenLayouts.screenWidth * 0.8,
    },
  });
