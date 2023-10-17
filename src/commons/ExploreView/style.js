import {StyleSheet} from 'react-native';
import {ScreenLayouts} from '../../constant/Screenlayout';

export const Styles = () =>
  StyleSheet.create({
    container: {
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
      width: 70,
      height: 20,
    },
  });
