import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MyStack} from '../MyStack';

const Stack = createNativeStackNavigator();
export const Application = () => {
  const {Navigator, Screen} = Stack;
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen  name='StackNavigation' component={MyStack}/>
      </Navigator>
    </NavigationContainer>
  );
};
