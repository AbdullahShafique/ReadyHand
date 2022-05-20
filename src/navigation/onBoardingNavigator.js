import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SelectUserType from '../screens/onBoardingScreens/selectUserType';
import ProfileSetup from '../screens/onBoardingScreens/profileSetup';
import ChooseServices from '../screens/onBoardingScreens/chooseServices';
import ProfileVerification from '../screens/onBoardingScreens/profileVerification';

const Stack = createNativeStackNavigator();

const OnBoardingNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'fade'}}
      initialRouteName={'SelectUserType'}>
      <Stack.Screen name="SelectUserType" component={SelectUserType} />
      <Stack.Screen name="ProfileSetup" component={ProfileSetup} />
      <Stack.Screen name="ChooseServices" component={ChooseServices} />
      <Stack.Screen
        name="ProfileVerification"
        component={ProfileVerification}
      />
    </Stack.Navigator>
  );
};

export default OnBoardingNavigator;
