import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import colors from '../../../globalStyles/colors';
import WhiteHeader from '../../../components/header/whiteHeader';
import SmallButton from '../../../components/buttons/smallButton';

const Account = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <WhiteHeader text={'Account'} onPress={() => navigation.goBack()} />
      {/* Title */}
      <Text style={styles.text1}>Get your revenue straight to your bank</Text>
      {/* Description */}
      <Text style={styles.text2}>
        Transfer your LikeRuths revenue to your local bank account un your local
        currency . Supported by Payoneer
      </Text>
      {/* Icon View */}
      <View
        style={{
          width: '80%',
          marginTop: '5%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}>
        {/* Balance */}
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../../../assets/icons/circle.png')}
            resizeMode={'contain'}
            style={{
              width: Dimensions.get('window').width / 10,
              height: Dimensions.get('window').width / 10,
              marginBottom: Dimensions.get('window').width * 0.02,
            }}
          />
          <Text style={styles.text3}>Your ReadyHands Balance</Text>
        </View>
        {/* Line */}
        <View
          style={{
            borderColor: colors.Green,
            borderWidth: 1,
            width: '10%',
            borderStyle: 'dashed',
            alignSelf: 'center',
          }}
        />
        {/* Payoneer */}
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../../../assets/icons/paypal.png')}
            resizeMode={'contain'}
            style={{
              width: Dimensions.get('window').width / 10,
              height: Dimensions.get('window').width / 10,
              marginBottom: Dimensions.get('window').width * 0.02,
            }}
          />
          <Text style={styles.text3}>Your ReadyHands Balance</Text>
        </View>
        {/* Line */}
        <View
          style={{
            borderColor: colors.Green,
            borderWidth: 1,
            width: '10%',
            borderStyle: 'dashed',
            alignSelf: 'center',
          }}
        />
        {/* Transfer */}
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../../../assets/icons/bank.png')}
            resizeMode={'contain'}
            style={{
              width: Dimensions.get('window').width / 10,
              height: Dimensions.get('window').width / 10,
              marginBottom: Dimensions.get('window').width * 0.02,
            }}
          />
          <Text style={styles.text3}>Your ReadyHands Balance</Text>
        </View>
      </View>
      {/* Link Account */}
      <View style={{marginTop: '10%'}}>
        <SmallButton
          text={'Link Account'}
          height={Dimensions.get('window').height / 17}
          width={Dimensions.get('window').width / 2}
          onPress={() => console.log('Link Account')}
        />
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  text1: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Black,
    fontSize: 16,
    marginTop: '10%',
  },
  text2: {
    fontFamily: 'OpenSans-Regular',
    color: colors.Black,
    fontSize: 16,
    width: '80%',
    marginTop: '5%',
    borderBottomWidth: 1,
    paddingBottom: '5%',
    borderColor: colors.DarkGrey,
    textAlign: 'center',
  },
  text3: {
    width: Dimensions.get('window').width / 4.5,
    textAlign: 'center',
    flexWrap: 'wrap',
    fontFamily: 'OpenSans-Bold',
    color: colors.Black,
    fontSize: 12,
  },
});
