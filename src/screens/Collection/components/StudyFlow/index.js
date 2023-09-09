import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Styles} from './styles';
import {IMAGE} from '../../../../assets';
import {LineBar} from '../../../../constant/LineBar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const StudyFlow = ({navigation}) => {
  const [answer, setAnswer] = useState(true);
  const [show, setShow] = useState(false);

  return (
    <View style={Styles().container}>
      <View style={Styles().header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Collection');
          }}>
          <Image source={IMAGE.IMAGES.Close} />
        </TouchableOpacity>
        <LineBar value={60} maxValue={100} />
        <View></View>
      </View>
      <View style={Styles().mainContainer}>
        {answer === true ? (
          <View style={Styles().questionContainer}>
            <View style={Styles().questionView}>
              <MaterialCommunityIcons
                name="dots-horizontal"
                size={75}
                color="#4A465B"
              />
              <View style={Styles().questionSection}>
                <Text style={Styles().taq}># Flutter Ecosystem</Text>
                <Text style={Styles().questionTaq}>## Question</Text>
                <Text style={Styles().questionText}>
                  Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair,
                  deitado sem dormir, sentado sem cochilar e fazendo pose.
                </Text>
              </View>
              <View style={Styles().questionSectionContainer}>
                <Text style={Styles().questionSectionContainerText}>
                  {`if(condition){
                print("The condition is true!") else {
                  print("The condition is false!");
                }
              }`}
                </Text>
              </View>
              <View style={Styles().lastQuestionContainer}>
                <Text style={Styles().lastQuestionContainer}>
                  Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair,
                  deitado sem dormir, sentado sem cochilar e fazendo pose.
                  Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair,
                  deitado sem dormir, sentado sem cochilar e fazendo pose.
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={Styles().answerButton}
              onPress={() => {
                console.log('working');
                setAnswer(false);
              }}>
              <Text style={Styles().answerText}>SEE ANSWER</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={Styles().questionContainer}>
            <View style={Styles().questionView}>
              <MaterialCommunityIcons
                name="dots-horizontal"
                size={45}
                color="#4A465B"
              />
              <View style={Styles().questionSection}>
                <Text style={Styles().taq}># Flutter Ecosystem</Text>
                <Text style={Styles().questionTaq}>## Question</Text>
                <Text style={Styles().questionText}>
                  Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair,
                  deitado sem dormir, sentado sem cochilar e fazendo pose.
                </Text>
              </View>
              <View style={Styles().questionSectionContainer}>
                <Text style={Styles().questionSectionContainerText}>
                  {`if(condition){
                print("The condition is true!") else {
                  print("The condition is false!");
                }
              }`}
                </Text>
              </View>
              <View style={Styles().lastQuestionContainer}>
                <Text style={Styles().lastQuestionContainer}>
                  Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair,
                  deitado sem dormir, sentado sem cochilar e fazendo pose.
                  Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair,
                  deitado sem dormir, sentado sem cochilar e fazendo pose.
                </Text>
              </View>
              {show ? (
                <View style={Styles().EmojiContainer}>
                  <TouchableOpacity
                    style={Styles()}
                    onPress={() => {
                      console.log('kar kye Qalar sha');
                    }}>
                    <Image source={IMAGE.IMAGES.Sad} />
                    <Text>Hard</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={Styles()}
                    onPress={() => {
                      console.log('kar kye Qalar sha');
                      navigation.navigate('StudyFinal');
                    }}>
                    <Image source={IMAGE.IMAGES.Happy} />
                    <Text>Medium</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={Styles()}
                    onPress={() => {
                      navigation.navigate('StudyFinal');
                      console.log('kar kye Qalar sha');
                    }}>
                    <Image source={IMAGE.IMAGES.Easy} />
                    <Text>Easy</Text>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
            <TouchableOpacity
              style={Styles().answerButton}
              onPress={() => {
                navigation.navigate('StudyFinal');
                console.log('working');
                setShow(true);
              }}>
              <Text style={Styles().answerText}>SEE QUESTION</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};
