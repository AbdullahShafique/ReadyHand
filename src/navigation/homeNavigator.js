import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/homeScreens/home';
import SelectServices from '../screens/homeScreens/selectServices';
import Filters from '../screens/homeScreens/filters';
import Search from '../screens/homeScreens/search';
import ChoosePayment from '../screens/homeScreens/choosePayment';
import TrackOrder from '../screens/homeScreens/trackOrder';
import DisputeOrHelp from '../screens/homeScreens/disputeOrHelp';
import Dashboard from '../screens/homeScreens/dashboard';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SelectServices" component={SelectServices} />
      <Stack.Screen name="Filters" component={Filters} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="ChoosePayment" component={ChoosePayment} />
      <Stack.Screen name="TrackOrder" component={TrackOrder} />
      <Stack.Screen name="DisputeOrHelp" component={DisputeOrHelp} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
