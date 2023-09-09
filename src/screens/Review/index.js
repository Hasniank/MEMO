import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Style} from './style';
import {IMAGE} from '../../assets';
import {LineBar} from '../../constant/LineBar';

export const Review = () => {
  const [review, setReview] = useState(false);
  return (
    <View style={Style().container}>
      <View style={Style().header}>
        <TouchableOpacity style={{left: 20}}>
          <Image source={IMAGE.IMAGES.SettingICON} />
        </TouchableOpacity>
        <Text style={Style().reviewText}>Review</Text>
        <View></View>
      </View>
      {/* {review === false ? (
        <View style={Style().mainContainer}>
          <MaterialCommunityIcons
            name="chevron-right-box"
            size={105}
            color="#7A748E"
          />
          <Text style={Style().noCollectionText}>No collection to review</Text>
          <Text style={Style().collectionText}>
            A collection will only appear here after you finish all its Memos at
            least once.
          </Text>
          <TouchableOpacity
            style={Style().startButton}
            onPress={() => {
              setReview(true);
            }}>
            <Text>START NOW</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={Style().reviewContainer}>
          <View style={Style().reviewContainerInner}>
            <Text style={Style().stateText}>EN-US</Text>
            <Text style={Style().flutterText}>Flutter Ecosystem</Text>
            <View>
              <Text>FLUTTER</Text>
            </View>
            <Text>Memory recall</Text>
            <LineBar maxValue={100} value={40} />
          </View>
        </View>
      )} */}
      <View style={Style().reviewContainer}>
        <View style={Style().reviewContainerInner}>
          <Text style={Style().stateText}>EN-US</Text>
          <Text style={Style().flutterText}>Flutter Ecosystem</Text>
          <View style={Style().tagContainer}>
            <View style={Style().tag}>
              <Text style={Style().tagText}>FLUTTER</Text>
            </View>
          </View>
          <Text style={Style().memoryText}>Memory recall</Text>
          <View style={Style().barContainer}>
            <LineBar maxValue={100} value={40} />
          </View>
        </View>
      </View>
    </View>
  );
};
