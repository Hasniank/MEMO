import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Collection, Setting, SplashScreen} from '../../screens';
import {Login} from '../../screens/Login';
import {BottomTab} from '../BottomTab';
import {Details} from '../../screens/Collection/components/Details/Details';
import {StudyFlow} from '../../screens/Collection/components/StudyFlow';

const Stack = createNativeStackNavigator();
export const MyStack = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      {loading ? (
        <Stack.Screen name="Splash" component={SplashScreen} />
      ) : (
        <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        />
      )}
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Collection"
        component={Collection}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StudyFlow"
        component={StudyFlow}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StudyFinal"
        component={StudyFlow}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
