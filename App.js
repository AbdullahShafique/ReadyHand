import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import RootNavigator from './src/navigation/rootNavigator';
import {AuthProvider} from './src/Authentication/authProvider';

const App = () => {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
