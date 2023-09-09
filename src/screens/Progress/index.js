import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Style} from './style';
import {IMAGE} from '../../assets';
import {LineBar} from '../../constant/LineBar';
import {CircleBar} from '../../constant/CircleBar';

export const Progress = ({navigation}) => {
  return (
    <View style={Style().container}>
      <View style={Style().header}>
        <TouchableOpacity
          style={{paddingLeft: 15}}
          onPress={() => {
            navigation.navigate('Setting');
          }}>
          <Image source={IMAGE.IMAGES.SettingICON} />
        </TouchableOpacity>
        <Text style={Style().progressText}>Progress</Text>
        <View></View>
      </View>
      <View style={Style().mainContainer}>
        <View style={Style().hourContainer}>
          <View style={Style().hourContainer1}>
            <Text style={Style().h2Text}>2h</Text>
            <Text style={Style().totalText}>TOTALS OF STUDIES</Text>
          </View>
          <View style={Style().hourContainer1}>
            <Text style={Style().h2Text}>100</Text>
            <Text style={Style().totalText}>Memos Reviewed</Text>
          </View>
        </View>
        <View>
          <CircleBar
            value={75}
            size={80}
            color="#f00"
            image={IMAGE.IMAGES.Happy}
          />
        </View>
      </View>
    </View>
  );
};
