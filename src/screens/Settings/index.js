import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Styles} from './style';
import {IMAGE} from '../../assets';

export const Setting = ({navigation}) => {
  return (
    <View style={Styles().container}>
      <View style={Styles().header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Collection');
          }}>
          <Image source={IMAGE.IMAGES.Close} />
        </TouchableOpacity>
        <Text style={Styles().settingText}>Settings</Text>
        <View></View>
      </View>
      <View style={Styles().mainContainer}>
        <View style={Styles().buttonContainer}>
          <Text style={Styles().buttonContainerText}>Legal</Text>
          <View style={Styles().button}>
            <Text style={Styles().buttonText}>Privacy Policy</Text>
            <View></View>
            <TouchableOpacity>
              <Image source={IMAGE.IMAGES.Forward} />
            </TouchableOpacity>
          </View>
          <View style={Styles().button}>
            <Text style={Styles().buttonText}>Terms of use</Text>
            <View></View>
            <TouchableOpacity>
              <Image source={IMAGE.IMAGES.Forward} />
            </TouchableOpacity>
          </View>
          <View style={Styles().button}>
            <Text style={Styles().buttonText}>Licenses</Text>
            <View></View>
            <TouchableOpacity>
              <Image source={IMAGE.IMAGES.Forward} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles().buttonContainer}>
          <Text style={Styles().buttonContainerText}>Sponsors</Text>
          <View style={Styles().button}>
            <Text style={Styles().buttonText}>Rocket Seat</Text>
            <View></View>
            <TouchableOpacity>
              <Image source={IMAGE.IMAGES.Arrow} />
            </TouchableOpacity>
          </View>
          <View style={Styles().button}>
            <Text style={Styles().buttonText}>Silva Lopes</Text>
            <View></View>
            <TouchableOpacity>
              <Image source={IMAGE.IMAGES.Arrow} />
            </TouchableOpacity>
          </View>
          <View style={Styles().button}>
            <Text style={Styles().buttonText}>Pingback</Text>
            <View></View>
            <TouchableOpacity>
              <Image source={IMAGE.IMAGES.Arrow} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles().buttonContainer}>
          <Text style={Styles().buttonContainerText}>Organizers</Text>
          <View style={Styles().button}>
            <Text style={Styles().buttonText}>Lucas Montano</Text>
            <View></View>
            <TouchableOpacity>
              <Image source={IMAGE.IMAGES.Arrow} />
            </TouchableOpacity>
          </View>
          <View style={Styles().button}>
            <Text style={Styles().buttonText}>Olympus</Text>
            <View></View>
            <TouchableOpacity>
              <Image source={IMAGE.IMAGES.Arrow} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity style={Styles().logOutButton}>
            <Text style={Styles().logOutText}>LOG OUT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles().deleteButton}>
            <Text style={Styles().deleteText}>DELETE ACCOUNT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
