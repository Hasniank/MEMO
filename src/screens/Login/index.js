import {View, Text, Image, Alert, Modal, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Styles} from './styles';
import {IMAGE} from '../../assets';
import {Button} from '../../commons';
import {ScreenLayouts} from '../../constant/Screenlayout';

export const Login = () => {
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
      <View style={Styles()}>
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
          <View
            style={{justifyContent: 'center', alignItems: 'center', flex: 1,backgroundColor:'#343141E5'}}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
                console.log('close');
              }}>
              <Text style={{color: '#fff'}}>Modal</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </View>
  );
};
