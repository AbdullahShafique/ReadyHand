import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Notifications from '../screens/notificationScreens/notifications';

const Stack = createNativeStackNavigator();

const NotificationsNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'fade'}}
      initialRouteName={'Notifications'}>
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
};

export default NotificationsNavigation;
