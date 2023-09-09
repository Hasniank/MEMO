import React from 'react';
import {Application, MyStack} from './src/navigation';
import {Collection, Login, Progress, Review} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
import {Details} from './src/screens/Collection/components/Details/Details';
import {StudyFlow} from './src/screens/Collection/components/StudyFlow';
import { StudyFinal } from './src/screens/Collection/components/StudyFlow/StudyFinal';

export const App = () => {
  return (
    // <NavigationContainer>
    //   <MyStack />
    // </NavigationContainer>
    <StudyFinal />
  );
};
