import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Styles} from './style';
import {IMAGE} from '../../assets';
import {ExploreView} from '../../commons/ExploreView';
import {CommonButton} from '../../commons';
import {ScreenLayouts} from '../../constant/Screenlayout';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Collection = ({navigation}) => {
  const [collection, setCollection] = useState(false);
  // const Tags = [
  //   {Framework: 'Framework'},
  //   {Flutter: 'Flutter'},
  //   {Cross: 'Cross - platform'},
  //   {Git: 'Git'},
  //   {Versioning: 'Versioning'},
  // ];
  // Tags.map(i => {
  //   console.log(i);
  // });
  const Tags = [
    'Framework',
    'Flutter',
    'Cross - platform',
    'Git',
    'Versioning',
  ];
  console.log(Tags[0]);
  return (
    <View style={Styles().container}>
      <View style={Styles().header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Setting');
          }}>
          <FontAwesome6 name="sliders" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={Styles().collectionText}>Collection</Text>
        <Ionicons name="filter" size={25} color="#fff" />
      </View>
      <View style={Styles().buttonContainer}>
        <TouchableOpacity
          style={[
            collection === false
              ? Styles().exploreButton
              : Styles().exploreButtonSelect,
          ]}
          onPress={() => {
            setCollection(false);
            console.log('False');
          }}>
          <Text style={Styles().exploreButtonText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles().CollectionButton}
          onPress={() => {
            setCollection(true);
            console.log('True');
          }}>
          <Text style={Styles().CollectionButtonText}>My Collection</Text>
        </TouchableOpacity>
      </View>
      <View>
        {collection == false ? (
          <View style={Styles()}>
            <View style={Styles().exploreContainer}>
              <View style={Styles().exploreInnerContainer}>
                <Text style={Styles().title}>Flutter </Text>
                <View></View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Details',{Tags:Tags});
                  }}>
                  <Text style={Styles().details}>See All</Text>
                </TouchableOpacity>
              </View>
              <View style={Styles().exploreLastContainer}>
                <Text style={Styles().state}>EN-US</Text>
                <Text style={Styles().description}>Flutter Ecosystems</Text>
                <View style={Styles().tagView}>
                  {Tags.map(i => (
                    <Text style={Styles().tags}>{i}</Text>
                  ))}
                </View>
              </View>
            </View>
            <View style={Styles().exploreContainer}>
              <View style={Styles().exploreInnerContainer}>
                <Text style={Styles().title}>Versioning </Text>
                <View></View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Details');
                  }}>
                  <Text style={Styles().details}>See All</Text>
                </TouchableOpacity>
              </View>
              <View style={Styles().exploreLastContainer}>
                <Text style={Styles().state}>EN-US</Text>
                <Text style={Styles().description}>Get started with Git</Text>
                <View style={Styles().tagView}>
                  {Tags.map(i => (
                    <Text style={Styles().tags}>{i}</Text>
                  ))}
                </View>
              </View>
            </View>
            <View style={Styles().exploreContainer}>
              <View style={Styles().exploreInnerContainer}>
                <Text style={Styles().title}>Scrum</Text>
                <View></View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Details');
                  }}>
                  <Text style={Styles().details}>See All</Text>
                </TouchableOpacity>
              </View>
              <View style={Styles().exploreLastContainer}>
                <Text style={Styles().state}>EN-US</Text>
                <Text style={Styles().description}>Scrum Foundations</Text>
                <View style={Styles().tagView}>
                  {Tags.map(i => (
                    <Text style={Styles().tags}>{i}</Text>
                  ))}
                </View>
              </View>
            </View>
          </View>
        ) : (
          <View style={Styles().collectionContainer}>
            <Image source={IMAGE.IMAGES.CollectionFolder} />
            <Text style={Styles().collectionCreatedText}>
              No collection created
            </Text>
            <Text style={Styles().collectionParagraph}>
              Create your first collection based on any subject you want to
              improve your fixation
            </Text>
            <CommonButton
              text={'CREATE A COLLECTION'}
              backgroundColor={'#49AB6C'}
              width={ScreenLayouts.screenWidth * 0.5}
              height={ScreenLayouts.screenHeight * 0.06}
              color={'#fff'}
            />
          </View>
        )}
      </View>
    </View>
  );
};

// <View>
// <Text >Flutter</Text>
// <View></View>
// <Text>SEE ALL</Text>
// </View>
// <View>
// <Text>EN-Us</Text>
// <Text>Fluter Ecosystems</Text>
// <View>
//   <Text>FLUTTER</Text>
//   <Text>FRAMKEWORK</Text>
//   <Text>CROSS-PLATFORM</Text>
// </View>
// </View>
