import {View, Text} from 'react-native';
import React from 'react';
import OnBoardingNavigator from './onBoardingNavigator';
import BottomTabNavigator from './bottomTabNavigator';

const MainNavigator = () => {
  return 1 ? <OnBoardingNavigator /> : <BottomTabNavigator />;
};

export default MainNavigator;
