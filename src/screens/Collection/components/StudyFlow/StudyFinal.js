import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';
import {Styles} from './styles';
import {CircleBar, LineBar, ScreenLayouts} from '../../../../constant';
import {IMAGE} from '../../../../assets';
import {Progress} from '../../../Progress';
import {ImageCircle} from '../../../../commons';
import {Svg, Circle} from 'react-native-svg';

export const StudyFinal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={Styles().container}>
      <View style={Styles().studyFinalHeader}>
        <Image source={IMAGE.IMAGES.Celebration} />
        <Text style={Styles().wellText}>## Well Done!</Text>
        <Text style={Styles().studyFinalHeaderText}>
          You have just improved your fixation on:
        </Text>
        <Text style={Styles().flutterText}># Flutter Ecosystem</Text>
      </View>
      <View style={Styles().studyFinalMain}>
        <View style={Styles().performanceImageConatiner}>
          <Text style={Styles().performanceText}>Your performance </Text>
          <View style={Styles().performanceCircleContainer}>
            <View>
              <CircleBar radius={100} progress={30} />
            </View>
          </View>
        </View>
      </View>
      {/* <Modal transparent={true} visible={modalVisible}>
        <View>
          <Text>Discard Study</Text>
          <Text>
            If you end your study, you will lose all your progress. Do you
            really want to proceed?{' '}
          </Text>
          <TouchableOpacity>
            <Text>DISCARD</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text> BACK TO STUDY</Text>
          </TouchableOpacity>
        </View>
      </Modal> */}
    </View>
  );
};
