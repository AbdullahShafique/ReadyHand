import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Messages from '../screens/messagesScreens/messages';
import Chat from '../screens/messagesScreens/chat';
import Login from '../screens/authScreens/login';

const Stack = createNativeStackNavigator();

const MessagesNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Messages'}>
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};

export default MessagesNavigator;
