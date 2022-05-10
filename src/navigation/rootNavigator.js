import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/authScreens/splash';
import AuthNavigator from './authNavigator';
import MainNavigator from './mainNavigator';
import {AuthContext} from '../Authentication/authProvider';

const RootNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {user} = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <NavigationContainer>
        {isLoading ? <Splash /> : user ? <MainNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
