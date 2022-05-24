import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import GeneralServiceTaker from '../screens/profileScreens/GeneralServiceTaker';
import Service from '../screens/profileScreens/service';
import Reviews from '../screens/profileScreens/Reviews';
// import GeneralServiceTaker from '../screens/ServiceProvider/GeneralServiceTaker';
// import ServiceTaker from '../screens/ServiceProvider/ServiceTaker';

// import ServiceReview from '../screens/ServiceProvider/ServiceReview';
import colors from '../globalStyles/colors';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Tab = createMaterialTopTabNavigator();

const MaterialTopTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="ServiceTakerProfileGeneral"
      screenOptions={{
        tabBarActiveTintColor: colors.Green,
        tabBarInactiveTintColor: colors.DarkGrey,
        tabBarIndicatorStyle: {
          backgroundColor: colors.Green,
          width: '7%',
          marginLeft: '9.5%',
        },
        tabBarLabelStyle: styles.text,
      }}>
      <Tab.Screen name="General" component={GeneralServiceTaker} />
      <Tab.Screen name="Service" component={Service} />
      <Tab.Screen name="Reviews" component={Reviews} />
    </Tab.Navigator>
  );
};

export default MaterialTopTabNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    //  color: colors.Green,
    fontSize: 16,
    textTransform: 'none',
  },
});
