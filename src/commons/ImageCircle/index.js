import React from 'react';
import { View, StyleSheet } from 'react-native';

export const ImageCircle = ({ progress, borderColor, backgroundColor }) => {
  return (
    <View style={[styles.container, { borderColor }]}>
      <View style={[styles.progress, { backgroundColor, width: `${progress}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    borderWidth: 2, // Border width
    borderRadius: 10, // Border radius to make it rounded
    overflow: 'hidden', // Clip child elements within the bounds of the container
  },
  progress: {
    flex: 1, // Takes up the available space within the container
  },
});


