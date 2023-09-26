import {StyleSheet} from 'react-native';
import {ScreenLayouts} from '../../../../constant/Screenlayout';

export const Styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1F1D28',
    },
    header: {
      flexDirection: 'row',
      width: ScreenLayouts.screenWidth * 1,
      justifyContent: 'space-around',
      alignItems: 'center',
      alignSelf: 'center',
      height: ScreenLayouts.screenHeight * 0.1,
    },
    mainContainer: {
      //  justifyContent: 'center',
      alignItems: 'center',
      width: ScreenLayouts.screenWidth * 1,
      height: ScreenLayouts.screenHeight * 9,
      // backgroundColor: 'red',
    },
    questionContainer: {
      width: ScreenLayouts.screenWidth * 0.95,
      height: ScreenLayouts.screenHeight * 0.78,
      borderWidth: 3,
      borderColor: '#4A465B',
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    questionView: {
      width: ScreenLayouts.screenWidth * 0.94,
      borderColor: '#4A465B',
      borderBottomWidth: 2,
      height: ScreenLayouts.screenHeight * 0.7,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      paddingLeft: 20,
    },
    answerText: {
      color: '#60D88B',
      fontSize: 20,
    },
    answerButton: {
      width: ScreenLayouts.screenWidth * 0.4,
      height: ScreenLayouts.screenHeight * 0.06,
    },
    EmojiContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: ScreenLayouts.screenWidth * 0.8,
    },
    questionSection: {
      width: ScreenLayouts.screenWidth * 0.7,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      paddingLeft: 5,
    },
    taq: {
      color: '#ACA7C1',
      fontSize: 20,
      letterSpacing: 4,
    },
    questionTaq: {
      color: '#AF93FF',
      marginTop: 2,
      fontSize: 20,
    },
    questionText: {
      color: '#fff',
      fontSize: 15,
      marginTop: 10,
      width: ScreenLayouts.screenWidth * 0.8,
      letterSpacing: 3,
      lineHeight: 30,
      borderRadius: 5,
    },
    questionSectionContainer: {
      width: ScreenLayouts.screenWidth * 0.8,
      height: ScreenLayouts.screenHeight * 0.25,
      backgroundColor: '#343141',
      marginTop: 20,
    },
    questionSectionContainerText: {
      color: '#fff',
      height: ScreenLayouts.screenHeight * 0.2,
      width: ScreenLayouts.screenWidth * 0.7,
      lineHeight: 30,
      marginTop: 10,
      marginLeft: 10,
      fontSize: 15,
      letterSpacing: 4,
    },
    lastQuestionContainer: {
      marginTop: 10,
      width: ScreenLayouts.screenWidth * 0.8,
    },
    lastQuestionContainer: {
      color: '#fff',
      fontSize: 15,
    },
    imageContainer: {
      width: ScreenLayouts.screenWidth * 0.05,
      borderWidth: 3,
      borderColor: '#9C80EA',
    },
    studyFinalContainer: {
      flex: 1,
      backgroundColor: '#1F1D28',
    },
    studyFinalHeader: {
      width: ScreenLayouts.screenWidth * 1,
      height: ScreenLayouts.screenHeight * 0.4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    studyFinalMain: {
      width: ScreenLayouts.screenWidth * 1,
      height: ScreenLayouts.screenHeight * 0.4,
      // justifyContent: 'center',
      alignItems: 'center',
    },
    studyFinalFooter: {
      width: ScreenLayouts.screenWidth * 1,
      height: ScreenLayouts.screenHeight * 0.2,
    },
    wellText: {
      color: '#60D88B',
      fontSize: 15,
      marginTop: 10,
    },
    studyFinalHeaderText: {
      color: '#928CA6',
      width: ScreenLayouts.screenWidth * 0.45,
      textAlign: 'center',
      marginTop: 10,
      fontSize: 15,
    },
    flutterText: {
      color: '#FFF',
      fontSize: 20,
      marginTop: 10,
    },
    performanceText: {
      color: '#ADA7C1',
      fontSize: 16,
      marginTop: 10,
    },
    performanceImageConatiner: {
      width: ScreenLayouts.screenWidth * 0.9,
      borderTopWidth: 1,
      borderColor: '#7A748E',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    performanceCircleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    percentageText: {
      color: '#9C80EA',
      fontSize: 16,
    },
    MarkedText: {
      fontSize: 12,
      color: '#ffff',
    },
  });
