import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/homeScreens/home';
import SelectServices from '../screens/homeScreens/selectServices';
import Filters from '../screens/homeScreens/filters';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SelectServices" component={SelectServices} />
      <Stack.Screen name="Filters" component={Filters} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
