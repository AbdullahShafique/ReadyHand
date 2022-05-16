import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import WhiteHeader from '../../components/header/whiteHeader';
import BookingCard from '../../components/cards/bookingCard';
import colors from '../../globalStyles/colors';
import WhiteButton from '../../components/buttons/whiteButton';
import SmallButton from '../../components/buttons/smallButton';

const TrackOrder = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <WhiteHeader
        text={' Track Order'}
        text2={'Dispute/ Help'}
        onPress={() => navigation.goBack()}
        onPress2={() => navigation.navigate('DisputeOrHelp')}
      />
      {/* Top Card */}
      <BookingCard
        text={
          'I can clean your house in less time and efficiently. My rate is very affordable and service is very satisfactory.'
        }
      />
      {/* order Info */}
      <View
        style={{
          marginHorizontal: '5%',
          borderBottomWidth: 1,
          paddingBottom: '5%',
          borderStyle: 'dashed',
        }}>
        <Text style={styles.text1}>Wed, 12 Sep</Text>
        {/* Order ID: 5th35-85jy £8.00/Hr*/}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '5%',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text1}>Order ID: </Text>
            <Text style={styles.text3}>5th35-85jy</Text>
          </View>

          <Text style={styles.text1}>£8.00/Hr</Text>
        </View>
        {/* Time 3 Hrs*/}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '5%',
          }}>
          <Text style={styles.text3}>Time</Text>

          <Text style={styles.text1}>3 Hrs</Text>
        </View>
        {/* Service Fee*/}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '5%',
          }}>
          <Text style={styles.text3}>Service Fee</Text>

          <Text style={styles.text1}>£26.4</Text>
        </View>
      </View>
      {/* Total*/}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: '5%',
          marginHorizontal: '5%',
        }}>
        <Text style={styles.text1}>Total</Text>

        <Text style={styles.text1}>£26.4</Text>
      </View>
      {/* Chat With Service Provider */}
      <WhiteButton
        text={'Chat With Service Provider'}
        Icon={require('../../../assets/icons/downArrow.png')}
      />

      {/* Bottom Button */}
      <View style={{marginTop: '30%'}}>
        <SmallButton
          text={'Confirm Job Completion'}
          width={'70%'}
          height={Dimensions.get('window').height / 15}
          onPress={() => navigation.navigate('TrackOrder')}
        />
      </View>
    </View>
  );
};

export default TrackOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text1: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Black,
    fontSize: 16,
  },
  text2: {},
  text3: {
    fontFamily: 'OpenSans-Regular',
    color: colors.Black,
    fontSize: 16,
  },
});
