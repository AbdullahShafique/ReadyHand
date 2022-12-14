import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState, useContext} from 'react';
import WhiteButtonBold from '../../components/buttons/whiteButtonBold';
import {AuthContext} from '../../Authentication/authProvider';

const ServiceTakerProfileGeneral = ({navigation}) => {
  const {setUserType} = useContext(AuthContext);
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Switch to Service Provider */}
      <WhiteButtonBold
        text={'Switch to Service Provider'}
        value={true}
        //onValueChange={() => setIsEnabled(prev => !prev)}
        switchButton={true}
        onChange={() => setUserType('serviceProvider')}
      />
      {/* Proposals */}
      <WhiteButtonBold
        text={' Proposals'}
        Icon={require('../../../assets/icons/Proposals.png')}
        RightArrow={true}
        onPress={() => navigation.navigate('Proposals')}
      />

      {/* Subscriptions */}
      <WhiteButtonBold
        text={'Subscriptions'}
        Icon={require('../../../assets/icons/Subscriptions.png')}
        RightArrow={true}
        onPress={() => navigation.navigate('Subscriptions')}
      />

      {/* My Profile */}
      <WhiteButtonBold
        text={'My Profile'}
        Icon={require('../../../assets/icons/MyProfile.png')}
        RightArrow={true}
        onPress={() => navigation.navigate('MyProfile')}
      />

      {/* Settings */}
      <WhiteButtonBold
        text={'Settings'}
        Icon={require('../../../assets/icons/Settings.png')}
        RightArrow={true}
        onPress={() => navigation.navigate('Settings')}
      />

      {/* Support */}
      <WhiteButtonBold
        text={' Support'}
        Icon={require('../../../assets/icons/Support.png')}
        RightArrow={true}
        onPress={() => navigation.navigate('Support')}
      />
      {/* Logout */}
      <View style={{marginBottom: '10%'}}>
        <WhiteButtonBold
          text={' Logout'}
          Icon={require('../../../assets/icons/Logout.png')}
          RightArrow={true}
          onPress={() => console.log('Logout')}
          red={true}
        />
      </View>
    </ScrollView>
  );
};

export default ServiceTakerProfileGeneral;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
