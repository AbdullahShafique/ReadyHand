import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WhiteHeader from '../../components/header/whiteHeader';
import ProfileServiceCard from '../../components/cards/ProfileServiceCard';

const ServiceRequests = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <WhiteHeader
        text={'Service Requests'}
        onPress={() => navigation.goBack()}
        text2={'Add New'}
        onPress2={() => navigation.navigate('AddServiceRequest')}
      />
      {[1, 2, 3].map((item, index) => (
        <ProfileServiceCard
          key={index}
          item={{name: 'Zesshan Ali', addres: '197 Cadar Street London'}}
        />
      ))}
    </View>
  );
};

export default ServiceRequests;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
