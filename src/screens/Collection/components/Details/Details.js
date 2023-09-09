import {View, Text, TouchableOpacity, Image, Modal} from 'react-native';
import React, {useState} from 'react';
import {IMAGE} from '../../../../assets';
import {Styles} from './style';
import {CommonButton} from '../../../../commons';
import {ScreenLayouts} from '../../../../constant/Screenlayout';

export const Details = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={Styles().container}>
      <View style={Styles().headerContainer}>
        <View style={Styles().header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Collection');
              console.log('back');
            }}>
            <Image source={IMAGE.IMAGES.BackIcon} />
          </TouchableOpacity>
          <Text style={Styles().detailText}>Details</Text>
          <View>
            <Text></Text>
          </View>
        </View>
        <View style={Styles().headerTextContainer}>
          <Text style={Styles().stateText}>EN-US</Text>
          <Text style={Styles().titleText}>Flutter Ecosystem</Text>
        </View>
      </View>
      <View style={Styles().innerContainer}>
        <View style={Styles().descriptionText}>
          <Text style={Styles().descriptionText}>Description</Text>
          <Text style={Styles().descriptionTextParagraph}>
            “Flutter is an open-source UI software development kit created by
            Google. It is used to develop cross platform applications for
            Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web” -
          </Text>
          <Text style={Styles().wikipediaText}>Wikipedia, 2021.</Text>
          <View style={Styles().memosTextView}>
            <Text style={Styles().memosText}>20 MEMOS</Text>
          </View>
        </View>
        <View style={Styles().contributorContainer}>
          <Text style={Styles().contributorText}>5 contributors</Text>
          <View></View>
          <View style={Styles().imageContainer}>
            <Image source={IMAGE.IMAGES.Person1} style={Styles().personImage} />
            <Image source={IMAGE.IMAGES.Person2} style={Styles().personImage} />
            <Image source={IMAGE.IMAGES.Person3} style={Styles().personImage} />
            <Image source={IMAGE.IMAGES.Person4} style={Styles().personImage} />
            <Image source={IMAGE.IMAGES.Person5} style={Styles().personImage} />
          </View>
        </View>
        <View style={Styles().supportContainer}>
          <Text style={Styles().supportText}>Supporting materials</Text>
          <View style={Styles().supportButtonContainer}>
            <Image source={IMAGE.IMAGES.Articles} />
            <Text style={Styles().supportButtonText}>Article Suggestion</Text>
            <TouchableOpacity style={Styles()}>
              <Image source={IMAGE.IMAGES.Arrow} />
            </TouchableOpacity>
          </View>
          <View style={Styles().supportButtonContainer}>
            <Image source={IMAGE.IMAGES.Tv} />
            <Text style={Styles().supportButtonText}>Video Suggestion</Text>
            <TouchableOpacity>
              <Image source={IMAGE.IMAGES.Arrow} />
            </TouchableOpacity>
          </View>
          <View style={Styles().supportButtonContainer}>
            <Image source={IMAGE.IMAGES.Books} />
            <Text style={Styles().supportButtonText}>Book Suggestion</Text>
            <TouchableOpacity>
              <Image source={IMAGE.IMAGES.Arrow} />
            </TouchableOpacity>
          </View>
          <View style={Styles().supportButtonContainer}>
            <Image source={IMAGE.IMAGES.GraduationCap} />
            <Text style={Styles().supportButtonText}>Course Suggestion</Text>
            <TouchableOpacity>
              <Image source={IMAGE.IMAGES.Arrow} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={Styles().lastContainer}>
        <TouchableOpacity style={Styles().StudyButton} onPress={() => {
            console.log('Working');
            navigation.navigate('StudyFlow');
          }}>
          <Text>STUDY NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
{
  /* <Modal animationType="slide" visible={modalVisible}>
        <View style={Styles().ModalContainer}>
          <View>
            <Text>How does Anki work?</Text>
            <View>
              <Text>
                Anki is a flashcard-based study system where you revisit content
                you've already studied in order to improve retention of that
                content in your memory.
              </Text>
              <View>
                <Text>Supporting materials</Text>
                <Text>
                  Therefore, we recommend you study these supporting materials
                  above beforehand. Of course, this is just a suggestion to
                  improve your learning. Stick to what works best for you!
                </Text>
              </View>
            </View>
            <View>
              <CommonButton
                backgroundColor={'#49AB6C'}
                text={'Got It!'}
                width={ScreenLayouts.screenWidth * 0.6}
                height={ScreenLayouts.screenHeight * 0.06}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  console.log('Close');
                }}
              />
            </View>
          </View>
        </View>
      </Modal> */
}
