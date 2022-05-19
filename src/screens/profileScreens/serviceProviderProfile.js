import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState, useContext} from 'react';
import ServiceTakerProfileHeader from '../../components/header/serviceTakerProfileHeader';
import WhiteButtonBold from '../../components/buttons/whiteButtonBold';
import {AuthContext} from '../../Authentication/authProvider';

const ServiceProviderProfile = ({navigation}) => {
  const {setUserType} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      {/* Header */}
      <ServiceTakerProfileHeader
        text={'Profile'}
        Icon={require('../../../assets/images/user_profile.jpg')}
        onPress={() => navigation.goBack()}
        Usename={'Usename'}
      />
      <ScrollView
        style={{flex: 1, marginTop: '2.5%'}}
        showsVerticalScrollIndicator={false}>
        {/* Switch to Service Taker */}
        <WhiteButtonBold
          text={'Switch to Service Taker'}
          value={false}
          // onValueChange={() => setIsEnabled(prev => !prev)}
          switchButton={true}
          onChange={() => setUserType('serviceTaker')}
        />
        {/* Earnings */}
        <WhiteButtonBold
          text={'Earnings'}
          Icon={require('../../../assets/icons/doller.png')}
          RightArrow={true}
          onPress={() => navigation.navigate('Earnings')}
        />
        {/* Service Requests */}
        <WhiteButtonBold
          text={'Service Requests'}
          Icon={require('../../../assets/icons/Proposals.png')}
          RightArrow={true}
          onPress={() => navigation.navigate('ServiceRequests')}
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
        {/* Payments */}
        <WhiteButtonBold
          text={'Payments'}
          Icon={require('../../../assets/icons/Payments.png')}
          RightArrow={true}
          onPress={() => navigation.navigate('Payment')}
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
          text={'Support'}
          Icon={require('../../../assets/icons/Support.png')}
          RightArrow={true}
          onPress={() => navigation.navigate('Support')}
        />
        {/* Logout */}
        <View style={{marginBottom: '10%'}}>
          <WhiteButtonBold
            text={'Logout'}
            Icon={require('../../../assets/icons/Logout.png')}
            RightArrow={true}
            onPress={() => console.log('Logout')}
            red={true}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ServiceProviderProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  pencil: {
    width: 30,
    height: 30,
    position: 'absolute',
    bottom: 3,
    right: 3,
  },
});
