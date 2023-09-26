import React from 'react';
import {Application, MyStack} from './src/navigation';
import {Collection, Login, Progress, Review} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
import {Details} from './src/screens/Collection/components/Details/Details';
import {StudyFlow} from './src/screens/Collection/components/StudyFlow';
import {StudyFinal} from './src/screens/Collection/components/StudyFlow/StudyFinal';
import {NewCollection} from './src/screens/Collection/components/NewCollection';

export const App = () => {
  return (
    // <NavigationContainer>
    //   <MyStack />
    // </NavigationContainer>
    <NewCollection />
  );
};
