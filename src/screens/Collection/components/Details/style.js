import {StyleSheet} from 'react-native';
import {ScreenLayouts} from '../../../../constant/Screenlayout';

export const Styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    headerContainer: {
      width: ScreenLayouts.screenWidth * 1,
      backgroundColor: '#343141',
      height: ScreenLayouts.screenHeight * 0.18,
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    header: {
      marginLeft: 20,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      width: ScreenLayouts.screenWidth * 0.9,
    },
    detailText: {
      color: '#fff',
      fontSize: 17,
      fontWeight: 'bold',
    },
    headerTextContainer: {
      marginLeft: 20,
      justifyContent: 'flex-start',
      top: 20,
    },
    stateText: {
      color: '#C7C3DB',
      fontSize: 12,
    },
    titleText: {
      color: '#FFFFFF',
      fontSize: 20,
      letterSpacing: 2,
      fontWeight: '900',
    },
    innerContainer: {
      backgroundColor: '#1F1F28',
      width: ScreenLayouts.screenWidth * 1,
      height: ScreenLayouts.screenHeight * 0.65,
      justifyContent: 'center',
      alignItems: 'center',
    },
    descriptionContainer: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: ScreenLayouts.screenWidth * 0.9,
    },
    descriptionText: {
      color: '#ADA7C1',
      textAlign: 'left',
      fontSize: 16,
    },
    descriptionTextParagraph: {
      color: '#F7F7F9',
      width: ScreenLayouts.screenWidth * 0.9,
      fontSize: 14,
      textAlign: 'left',
      lineHeight: 25,
    },
    wikipediaText: {
      color: '#fff',
    },
    memosTextView: {
      backgroundColor: '#343141',
      width: ScreenLayouts.screenWidth * 0.2,
      height: ScreenLayouts.screenHeight * 0.03,
      justifyContent: 'center',
      alignItems: 'center',
    },
    memosText: {
      color: '#fff',
    },
    contributorContainer: {
      borderWidth: 1,
      borderColor: '#4A465B',
      width: ScreenLayouts.screenWidth * 0.9,
      height: ScreenLayouts.screenHeight * 0.07,
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
    },
    contributorText: {
      color: '#fff',
    },
    personImage: {
      width: 30,
      height: 30,
      borderRadius: 50,
    },
    imageContainer: {
      flexDirection: 'row',
    },
    supportContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    supportText: {
      color: '#ADA7C1',
    },
    supportButtonContainer: {
      width: ScreenLayouts.screenWidth * 0.8,
      height: ScreenLayouts.screenHeight * 0.06,
      backgroundColor: '#343141',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
      margin: 10,
      borderRadius: 10,
    },
    supportText: {},
    supportButtonText: {
      color: '#fff',
    },
    lastContainer: {
      width: ScreenLayouts.screenWidth * 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#4A465B',
      height: ScreenLayouts.screenHeight * 0.12,
    },
    StudyButton: {
      backgroundColor: '#49AB6C',
      width: ScreenLayouts.screenWidth * 0.9,
      height: ScreenLayouts.screenHeight * 0.06,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      marginTop: 10,
    },
    tagView: {
      flexDirection: 'row',
    },
    tags: {
      backgroundColor: '#846BCD',
      color: '#FFFFFF',
      width: '30%',
      height: 20,
      textAlign: 'center',
      borderRadius: 5,
      margin: 5,
      fontSize: 15,
    },
  });
