import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WhiteHeader from '../../components/header/whiteHeader';
import WhiteButton from '../../components/buttons/whiteButton';

const Settings = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <WhiteHeader text={'Settings'} onPress={() => navigation.goBack()} />
      {/* Currency */}
      <View style={{marginTop: '5%'}}>
        <WhiteButton
          text={'Currency'}
          Icon={require('../../../assets/icons/rightArrow.png')}
          onPress={() => navigation.navigate('Currency')}
        />
      </View>

      {/* Account */}
      <View style={{marginTop: '5%'}}>
        <WhiteButton
          text={'Account'}
          Icon={require('../../../assets/icons/rightArrow.png')}
          onPress={() => navigation.navigate('Account')}
        />
      </View>
      {/* Username */}
      <View style={{marginTop: '5%'}}>
        <WhiteButton
          text={'Username'}
          Icon={require('../../../assets/icons/rightArrow.png')}
          onPress={() => navigation.navigate('Username')}
        />
      </View>
      {/* Email */}
      <View style={{marginTop: '5%'}}>
        <WhiteButton
          text={'Email'}
          Icon={require('../../../assets/icons/rightArrow.png')}
          onPress={() => navigation.navigate('Email')}
        />
      </View>
      {/* Password */}
      <View style={{marginTop: '5%'}}>
        <WhiteButton
          text={'Password'}
          Icon={require('../../../assets/icons/rightArrow.png')}
          onPress={() => navigation.navigate('Password')}
        />
      </View>
      {/* Distance */}
      <View style={{marginTop: '5%'}}>
        <WhiteButton
          text={'Distance'}
          Icon={require('../../../assets/icons/rightArrow.png')}
          onPress={() => navigation.navigate('Distance')}
        />
      </View>

      {/* Logout */}
      <View style={{marginTop: '5%'}}>
        <WhiteButton
          text={'Logout'}
          red={true}
          onPress={() => console.log('Logout')}
        />
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
