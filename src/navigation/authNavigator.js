import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthMainScreen from '../screens/authScreens/authMainScreen';
import Login from '../screens/authScreens/login';
import Signup from '../screens/authScreens/signup';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'fade'}}
      initialRouteName={'AuthMainScreen'}>
      <Stack.Screen name="AuthMainScreen" component={AuthMainScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
