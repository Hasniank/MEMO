import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';
import {Styles} from './styles';
import {LineBar, ScreenLayouts} from '../../../../constant';
import {IMAGE} from '../../../../assets';
import {Progress} from '../../../Progress';

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
      {/* <View style={Styles().studyFinalMain}>
        <Text>Your performance </Text>
        <View>
          <View>
            <Image source={IMAGE.IMAGES.Sad} />
            <Text>20%</Text>
            <Text>Marked as Hard</Text>
          </View>
          <View>
            <Image source={IMAGE.IMAGES.Happy} />
            <Text>20%</Text>
            <Text>Marked as Hard</Text>
          </View>
          <View>
            <Image source={IMAGE.IMAGES.Easy} />
            <Text>20%</Text>
            <Text>Marked as Hard</Text>
          </View>
        </View>
        <View>
          <Text>30 /40 Memos completed</Text>
          <LineBar value={70} maxValue={100} />
        </View>
      </View> */}
      {/* <View style={Styles().studyFinalFooter}>
        <TouchableOpacity
          style={{
            width: ScreenLayouts.screenWidth * 0.8,
            height: ScreenLayouts.screenHeight * 0.06,
            backgroundColor: '#49AB6C',
          }}
          onPress={() => {
            console.log('k');
          }}>
          <Text>BACK TO COLLECTION</Text>
        </TouchableOpacity>
      </View> */}
      <Modal transparent={true} visible={modalVisible}>
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
      </Modal>
    </View>
  );
};
