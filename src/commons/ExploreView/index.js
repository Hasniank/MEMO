import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Styles} from './style';

export const ExploreView = ({
  Title,
  detail,
  state,
  description,
  tags,
 onPress
}) => {
  return (
    <View style={Styles().container}>
      <View style={Styles().exploreInnerContainer}>
        <Text style={Styles().title}>{Title}</Text>
        <View></View>
        <TouchableOpacity
         onPress={onPress}>
          <Text style={Styles().details}>{detail}</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles().exploreLastContainer}>
        <Text style={Styles().state}>{state}</Text>
        <Text style={Styles().description}>{description}</Text>
        <View style={Styles()}>
          <Text style={Styles().tags}>{tags}</Text>
        </View>
      </View>
    </View>
  );
};
