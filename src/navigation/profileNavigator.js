import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Proposals from '../screens/profileScreens/Proposals';
import Home from '../screens/homeScreens/home';
import MaterialTopTabHeader from '../components/header/materialTopTabHeader';
const Stack = createNativeStackNavigator();

const ProfileNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'MaterialTopTabHeader'}>
      <Stack.Screen
        name="MaterialTopTabHeader"
        component={MaterialTopTabHeader}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
