import {StyleSheet} from 'react-native';

export const Style = () =>
  StyleSheet.create({
    container: {
      marginBottom: 10,
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
    },
    bar: {
      height: 10,
      backgroundColor: '#000',
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
    },
    fill: {
      height: '100%',
      backgroundColor: '#9C80EA',
      borderRadius: 5,
    },
  });
