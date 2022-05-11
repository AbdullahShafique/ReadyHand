import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import OnBoardingNavigator from './onBoardingNavigator';
import BottomTabNavigator from './bottomTabNavigator';
import {AuthContext} from '../Authentication/authProvider';

const MainNavigator = () => {
  const {onBoardingDone} = useContext(AuthContext);
  return onBoardingDone ? <BottomTabNavigator /> : <OnBoardingNavigator />;
};

export default MainNavigator;
