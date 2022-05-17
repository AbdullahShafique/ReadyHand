import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import colors from '../globalStyles/colors';
import ServiceTakerProfileGeneral from '../screens/profileScreens/serviceTakerProfileGeneral';
import ServiceTakerProfileServices from '../screens/profileScreens/serviceTakerProfileServices';

const Tab = createMaterialTopTabNavigator();

const ServiceTakerProfileTopNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="ServiceTakerProfileGeneral"
      screenOptions={{
        tabBarActiveTintColor: colors.Green,
        tabBarInactiveTintColor: colors.DarkGrey,
        tabBarIndicatorStyle: {
          backgroundColor: colors.Green,
          width: '1%',
          marginLeft: '17.7%',
        },
        tabBarLabelStyle: styles.text,
      }}>
      <Tab.Screen name="General" component={ServiceTakerProfileGeneral} />
      <Tab.Screen name="Services" component={ServiceTakerProfileServices} />
    </Tab.Navigator>
  );
};

export default ServiceTakerProfileTopNavigator;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans-Bold',
    //  color: colors.Green,
    fontSize: 16,
  },
});
