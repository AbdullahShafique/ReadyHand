import {View, Text} from 'react-native';
import React, {useEffect, useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ServiceTakerProfile from '../screens/profileScreens/serviceTakerProfile';
import Proposals from '../screens/profileScreens/Proposals';
import MaterialTopTabHeader from '../components/header/materialTopTabHeader';
import Subscriptions from '../screens/profileScreens/subscriptions';
import MyProfile from '../screens/profileScreens/myProfile';
import Settings from '../screens/profileScreens/settings';
import ServiceProviderProfile from '../screens/profileScreens/serviceProviderProfile';
import Earnings from '../screens/profileScreens/earning';
import Account from '../screens/profileScreens/settings/account';
import CreateSubscription from '../screens/profileScreens/createSubscription';
import ServiceRequests from '../screens/profileScreens/serviceRequests';
import Payment from '../screens/profileScreens/payment';
import Support from '../screens/profileScreens/support';
import AddServiceRequest from '../screens/profileScreens/addServiceRequest';
import LinkAccount from '../screens/profileScreens/settings/linkAccount';
import Distance from '../screens/profileScreens/settings/distance';
import Currency from '../screens/profileScreens/settings/currency';
import Username from '../screens/profileScreens/settings/username';
import Email from '../screens/profileScreens/settings/email';
import Password from '../screens/profileScreens/settings/password';
import Withdraw from '../screens/profileScreens/settings/withdraw';
import Chat from '../screens/messagesScreens/chat';

import {AuthContext} from '../Authentication/authProvider';

const Stack = createNativeStackNavigator();

const ProfileNavigator = ({navigation}) => {
  const {userType} = useContext(AuthContext);

  useEffect(() => console.log('userType:', userType), []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: 'fade'}}>
      {userType == 'serviceTaker' ? (
        <Stack.Screen
          name="ServiceTakerProfile"
          component={ServiceTakerProfile}
        />
      ) : (
        <Stack.Screen
          name="ServiceProviderProfile"
          component={ServiceProviderProfile}
        />
      )}

      <Stack.Screen name="Proposals" component={Proposals} />
      <Stack.Screen name="Subscriptions" component={Subscriptions} />
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Earnings" component={Earnings} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="CreateSubscription" component={CreateSubscription} />
      <Stack.Screen name="ServiceRequests" component={ServiceRequests} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Support" component={Support} />
      <Stack.Screen name="AddServiceRequest" component={AddServiceRequest} />
      <Stack.Screen name="LinkAccount" component={LinkAccount} />
      <Stack.Screen name="Distance" component={Distance} />
      <Stack.Screen name="Currency" component={Currency} />
      <Stack.Screen name="Username" component={Username} />
      <Stack.Screen name="Email" component={Email} />
      <Stack.Screen name="Password" component={Password} />
      <Stack.Screen name="Withdraw" component={Withdraw} />
      <Stack.Screen name="Chat" component={Chat} />

      <Stack.Screen
        name="MaterialTopTabHeader"
        component={MaterialTopTabHeader}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
