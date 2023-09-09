import {StyleSheet} from 'react-native';
import {ScreenLayouts} from '../../constant/Screenlayout';

export const Styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1F1D28',
      alignItems: 'center',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: ScreenLayouts.screenWidth * 0.9,
      marginTop: 20,
    },
    collectionText: {
      fontSize: 15,
      color: '#fff',
    },
    buttonContainer: {
      width: ScreenLayouts.screenWidth * 1,
      flexDirection: 'row',
    },
    exploreButton: {
      borderBottomWidth: 2,
      width: ScreenLayouts.screenWidth * 0.5,
      //   borderColor: '#1F1D28',
      borderColor: '#9C81EA',
    },
    exploreButtonSelect: {
      borderBottomWidth: 2,
      width: ScreenLayouts.screenWidth * 0.5,
      //   borderColor: '#9C81EA',
      borderColor: '#1F1D28',
    },
    exploreButtonText: {
      color: '#fff',
      fontSize: 20,
      textAlign: 'center',
    },
    CollectionButton: {
      //   borderBottomWidth: 2,
      width: ScreenLayouts.screenWidth * 0.5,
      //   borderColor: '#1F1D28',
      //   borderColor: '#9C81EA',
    },
    CollectionButtonText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 20,
    },
    collectionContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    collectionCreatedText: {
      color: '#fff',
      fontSize: 18,
      marginTop: 10,
      width: ScreenLayouts.screenWidth * 0.5,
    },
    collectionParagraph: {
      color: '#928CA6',
      fontSize: 15,
      width: ScreenLayouts.screenWidth * 0.9,
      textAlign: 'center',
      lineHeight: 20,
      margin: 15,
      //   fontWeight:700
    },
  });
