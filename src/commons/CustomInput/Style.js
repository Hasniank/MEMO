import {StyleSheet} from 'react-native';
import {ScreenLayouts} from '../../constant';

export const Styles = () =>
  StyleSheet.create({
    container: {
      width: ScreenLayouts.screenWidth * 0.8,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'flex-start',
      height:ScreenLayouts.screenHeight*0.07
    },
    labelContainer: {},
    label: {
      fontSize: 16,
      color: '#fff',
    },
    inputContainer: {
      flexDirection: 'row', // Reverse direction to place the icon on the right
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      marginLeft: 10, // Adjust spacing as needed
      color: 'gray',
    },
    input: {
      flex: 1,
      fontSize: 18,
    },
  });
