import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ServiceTakerProfile from '../screens/profileScreens/serviceTakerProfile';
import Proposals from '../screens/profileScreens/Proposals';
import MaterialTopTabHeader from '../components/header/materialTopTabHeader';
import Subscriptions from '../screens/profileScreens/subscriptions';
import MyProfile from '../screens/profileScreens/myProfile';
import Settings from '../screens/profileScreens/settings';
const Stack = createNativeStackNavigator();

const ProfileNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'ServiceTakerProfile'}>
      <Stack.Screen
        name="ServiceTakerProfile"
        component={ServiceTakerProfile}
      />
      <Stack.Screen name="Proposals" component={Proposals} />
      <Stack.Screen name="Subscriptions" component={Subscriptions} />
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen name="Settings" component={Settings} />

      <Stack.Screen
        name="MaterialTopTabHeader"
        component={MaterialTopTabHeader}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
