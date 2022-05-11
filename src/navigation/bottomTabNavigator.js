import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from '../globalStyles/colors';
import HomeNavigator from './homeNavigator';
import MessagesNavigator from './messagesNavigator';
import NotificationsNavigation from './notificationsNavigation';
import ProfileNavigator from './profileNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      //  initialRouteName={}

      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 65,
        },
      }}>
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/icons/home.png')}
              resizeMode={'contain'}
              style={{
                width: '23%',
                height: '50%',
                tintColor: focused ? colors.Green : null,
                // backgroundColor: 100,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MessagesNavigator"
        component={MessagesNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/icons/message.png')}
              resizeMode={'contain'}
              style={{
                width: '23%',
                height: '50%',
                tintColor: focused ? colors.Green : null,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationsNavigation"
        component={NotificationsNavigation}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/icons/notification.png')}
              resizeMode={'contain'}
              style={{
                width: '23%',
                height: '50%',
                tintColor: focused ? colors.Green : null,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/icons/profile.png')}
              resizeMode={'contain'}
              style={{
                width: '23%',
                height: '50%',
                tintColor: focused ? colors.Green : null,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
