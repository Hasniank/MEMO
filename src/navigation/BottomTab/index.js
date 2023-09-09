import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Collection} from '../../screens';
import {Review} from '../../screens/Review';
import {Progress} from '../../screens/Progress';
import {JobBoard} from '../../screens/JobBoard';
import {IMAGE} from '../../assets';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Collection"
        screenOptions={{
          tabBarStyle: {backgroundColor: '#1F1D28'},
        }}>
        <Tab.Screen
          name="Collection"
          component={Collection}
          options={{
            headerShown: false,
            // tabBarIcon: ({}) => <Feather name="folder" size={30} />,
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="folder-o" size={25} color="#fff" />
            ),
          }}
        />
        <Tab.Screen
          name="Review"
          component={Review}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              // <Image
              //   source={IMAGE.IMAGES.ProgressWhite}
              //   width={20}
              //   height={25}
              // />
              <MaterialCommunityIcons
                name="chevron-right-box"
                size={25}
                color="#fff"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Progress"
          component={Progress}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Feather name="trending-up" size={25} color="#7A748E" />
            ),
          }}
        />
        <Tab.Screen
          name="jobBoard"
          component={JobBoard}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              // <Image
              //   source={IMAGE.IMAGES.JobBoardIcon}
              //   width={20}
              //   height={25}
              // />
              <FontAwesome5 name="list-alt" size={25} color="#7A748E" />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};
