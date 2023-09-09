import {View, Text, Image, Modal, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Styles} from './styles';
import {IMAGE} from '../../assets';
import {Button} from '../../commons';
import {ScreenLayouts} from '../../constant/Screenlayout';

export const Login = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={Styles().container}>
      <View style={Styles().textContainer}>
        <TouchableOpacity
          style={Styles().SkipButton}
          onPress={() => {
            setModalVisible(!modalVisible);
            console.log('open');
          }}>
          <Text style={Styles().skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles().ImageContainer}>
        <Image source={IMAGE.IMAGES.LoginWelcome} style={Styles().Image} />
      </View>
      <View style={Styles().ButtonContainer}>
        <Button
          source={IMAGE.IMAGES.GoogleIcon}
          width={ScreenLayouts.screenWidth * 0.9}
          backgroundColor={'#fff'}
          height={ScreenLayouts.screenHeight * 0.07}
          text={'continue with Google'}
          color={'#757575'}
          borderColor={'#fff'}
          borderRadius={5}
          fontSize={22}
          onPress={() => {
            console.log('first');
          }}
        />
        <Button
          source={IMAGE.IMAGES.AppleIcon}
          width={ScreenLayouts.screenWidth * 0.9}
          backgroundColor={'#fff'}
          height={ScreenLayouts.screenHeight * 0.07}
          text={'continue with Apple'}
          color={'#000'}
          borderColor={'#fff'}
          borderRadius={5}
          fontSize={22}
          onPress={() => {
            console.log('2nd');
          }}
        />
        <Button
          source={IMAGE.IMAGES.GithubIcon}
          width={ScreenLayouts.screenWidth * 0.9}
          backgroundColor={'#fff'}
          height={ScreenLayouts.screenHeight * 0.07}
          text={'continue with GitHub'}
          color={'#000'}
          borderColor={'#fff'}
          borderRadius={5}
          fontSize={22}
          onPress={() => {
            console.log('3rd');
          }}
        />
        <Modal visible={modalVisible} transparent={true}>
          <View style={Styles().modalView}>
            <View style={Styles().modalContainer}>
              <View style={Styles().ModalTextContainer}>
                <Text style={Styles().modalText1}>Think twice....</Text>
                <Text style={Styles().modalText2}>
                  If you skip your registration, no information about your
                  learning progress will be saved. Do you want to proceed?
                </Text>
              </View>
              <View style={Styles().modalButtonContainer}>
                <TouchableOpacity
                  style={Styles().createButton}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    console.log('close');
                  }}>
                  <Text style={Styles().createText}>Create Account</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={Styles().doButton}
                  onPress={() => {
                    navigation.navigate('BottomTab');
                  }}>
                  <Text style={Styles().doText}>DO IT LATER</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};
