import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Styles} from './style';
import {IMAGE} from '../../assets';
import {ExploreView} from '../../commons/ExploreView';
import {CommonButton} from '../../commons';
import {ScreenLayouts} from '../../constant/Screenlayout';

export const Collection = ({navigation}) => {
  const [collection, setCollection] = useState(false);

  return (
    <View style={Styles().container}>
      <View style={Styles().header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Setting');
          }}>
          <Image source={IMAGE.IMAGES.SettingICON} />
        </TouchableOpacity>
        <Text style={Styles().collectionText}>Collection</Text>
        <Image source={IMAGE.IMAGES.Filter} />
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
            <ExploreView
              Title={'Flutter'}
              detail={'SEE ALL'}
              description={'Flutter Ecosystem'}
              state={'EN-US'}
              tags={'FLUTTER'}
              onPress={() => {
                navigation.navigate('Details');
              }}
            />
            <ExploreView
              Title={'Versioning'}
              detail={'SEE ALL'}
              description={'Get started with Git'}
              state={'EN-US'}
              tags={'FLUTTER'}
            />
            <ExploreView
              Title={'Scrum'}
              detail={'SEE ALL'}
              description={'Scrum Foundations'}
              state={'EN-US'}
              tags={'FLUTTER'}
            />
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
