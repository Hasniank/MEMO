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
      height: ScreenLayouts.screenHeight * 0.08,
      alignItems: 'center',
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

    //Explore View Style
    exploreContainer: {
      width: ScreenLayouts.screenWidth * 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    exploreInnerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: ScreenLayouts.screenWidth * 0.95,
      marginTop: 20,
      marginBottom: 10,
    },
    title: {
      color: '#ADA7C1',
      fontSize: 20,
    },
    details: {
      color: '#9C81EA',
      fontSize: 15,
    },
    exploreLastContainer: {
      borderWidth: 5,
      borderColor: '#ADA7C1',
      backgroundColor: '#343141',
      width: ScreenLayouts.screenWidth * 0.95,
      marginTop: 5,
      height: ScreenLayouts.screenHeight * 0.12,
      borderRadius: 10,
      padding: 15,
    },
    state: {
      color: '#C7C3DB',
    },
    description: {
      color: '#fff',
    },
    tagContainer: {
      flexDirection: 'row',
    },
    tags: {
      backgroundColor: '#846BCD',
      color: '#FFFFFF',
      width: '15%',
      height: 20,
      textAlign: 'center',
      borderRadius: 5,
      margin: 5,
    },
    tagView: {
      flexDirection: 'row',
    },
  });
