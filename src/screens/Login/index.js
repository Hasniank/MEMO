import {View, Text, Image, Modal, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Styles} from './styles';
import {IMAGE} from '../../assets';
import {Button} from '../../commons';
import {ScreenLayouts} from '../../constant/Screenlayout';
import {
  GoogleSignin,
  statusCodes,
  
} from '@react-native-google-signin/google-signin';
// import {auth} from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';

export const Login = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(true);

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  GoogleSignin.configure({
    webClientId:
      '805718651799-b5f8nse4ir9981pnvg3u28813o70l05f.apps.googleusercontent.com',
  });
  const onGoogleButtonPress = async () => {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log(statusCodes.SIGN_IN_CANCELLED, '1');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log(statusCodes.IN_PROGRESS);
      } else if (
        (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE, '2')
      ) {
        // play services not available or outdated
        console.log(statusCodes.PLAY_SERVICES_NOT_AVAILABLE, '3');
      } else {
        // some other error happened
        console.log(error);
      }
    }
  };

  return (
    <View style={Styles().container}>
      <View style={Styles().textContainer}>
        <View></View>
        <View></View>
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
          text={'Continue with Google'}
          color={'#757575'}
          borderColor={'#fff'}
          borderRadius={5}
          fontSize={22}
          onPress={() =>
            onGoogleButtonPress()
              .then(() => {
                console.log('User signed in using Google');
              })
              .catch(error => {
                console.log(error);
              })
          }
        />

        <Button
          source={IMAGE.IMAGES.AppleIcon}
          width={ScreenLayouts.screenWidth * 0.9}
          backgroundColor={'#fff'}
          height={ScreenLayouts.screenHeight * 0.07}
          text={'Continue with GitHub'}
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
          text={'Continue with GitHub'}
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
