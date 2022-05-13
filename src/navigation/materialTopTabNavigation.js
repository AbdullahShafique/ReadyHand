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
      screenOptions={{
        tabBarItemStyle: {
          width: wp(33),
          backgroundColor: 'white',
        },

        tabBarIndicator: false,
      }}
      initialRouteName="Settings"
      // activeColor="#f0edf6"

      // tabBarOptions={{
      //   activeBackgroundColor: 'red',
      //   inactiveBackgroundColor: 'red',
      //   style: {
      //     elevation: 0,
      //     right: wp(5),
      //     backgroundColor: '#ffff',
      //     colors: 'red',
      //   },
      //   showLabel: true,
      //   labelStyle: {fontSize: 14},
      //   showIcon: true,
      // }}
    >
      <Tab.Screen
        options={{
          swipeEnabled: true,
          tabBarBounces: false,
          tabBarPressColor: 0,
          tabBarIcon: ({focused}) => (
            <View style={{paddingRight: 30}}>
              <Text
                style={{
                  color: focused ? colors.Green : colors.DarkGrey,
                  width: wp(18),
                  fontFamily: 'OpenSans-Bold',
                  fontSize: 16,
                }}>
                General
              </Text>
              <View
                style={{
                  borderWidth: focused ? 2 : 0,
                  // backgroundColor: focused ? colors.Green : colors.DarkGrey,
                  width: widthPercentageToDP(16),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: focused ? colors.Green : null,
                  marginTop: hp(0.8),
                  //   borderRadius: 65,
                }}></View>
            </View>
          ),
          tabBarShowLabel: false,
          headerShown: false,
        }}
        name="GeneralServiceTaker"
        component={GeneralServiceTaker}
      />
      <Tab.Screen
        options={{
          tabBarPressColor: 0,
          tabBarIcon: ({focused}) => (
            <View>
              <Text
                style={{
                  color: focused ? colors.Green : colors.DarkGrey,
                  width: wp(18),
                  fontFamily: 'OpenSans-Bold',
                  fontSize: 16,
                }}>
                Service
              </Text>
              <View
                style={{
                  borderWidth: focused ? 2 : 0,
                  // backgroundColor: focused ? colors.Green : colors.DarkGrey,
                  width: widthPercentageToDP(14),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: focused ? colors.Green : null,
                  marginTop: hp(0.8),
                  //   borderRadius: 65,
                }}></View>
            </View>
          ),
          tabBarShowLabel: false,
          headerShown: false,
        }}
        name="Service"
        component={Service}
      />
      <Tab.Screen
        options={{
          tabBarPressColor: 0,
          tabBarScrollEnabled: false,
          swipeEnabled: false,
          tabBarPressOpacity: 0,
          tabBarIcon: ({focused}) => (
            <View style={{marginRight: 50}}>
              <Text
                style={{
                  color: focused ? colors.Green : colors.DarkGrey,
                  width: wp(18),
                  fontFamily: 'OpenSans-Bold',
                  fontSize: 16,
                }}>
                Reviews
              </Text>
              <View
                style={{
                  borderWidth: focused ? 2 : 0,

                  width: widthPercentageToDP(17),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: focused ? colors.Green : null,
                  marginTop: hp(0.8),
                }}></View>
            </View>
          ),
          tabBarShowLabel: false,
          headerShown: false,
        }}
        name="Reviews"
        component={Reviews}
      />
      {/* <Tab.Screen name="Setting" component={ServiceTakerReview} /> */}
    </Tab.Navigator>
  );
};

export default MaterialTopTabNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
