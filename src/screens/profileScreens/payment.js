import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WhiteHeader from '../../components/header/whiteHeader';
import WhiteButton from '../../components/buttons/whiteButton';

const Payment = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <WhiteHeader
        text={'Payments'}
        icon={require('../../../assets/icons/payment_green.png')}
        noRadius={true}
        onPress={() => navigation.goBack()}
      />
      {/* Manage Currencies */}
      <View style={{marginTop: '5%'}}>
        <WhiteButton text={'Manage Currencies'} text4={'USD'} />
      </View>
      {/* Personal Balance */}
      <View style={{marginTop: '5%'}}>
        <WhiteButton text={'Personal Balance'} text4={'£0'} />
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
