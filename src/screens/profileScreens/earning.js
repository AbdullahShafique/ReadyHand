import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';
import WhiteHeader from '../../components/header/whiteHeader';
import WhiteButton from '../../components/buttons/whiteButton';

const Title = ({text, Icon}) => (
  <View style={{flexDirection: 'row', alignItems: 'center'}}>
    <Image
      source={Icon}
      resizeMode={'contain'}
      style={{width: '6%', marginHorizontal: '5%'}}
    />
    <Text style={styles.text3}>{text}</Text>
  </View>
);

const Earning = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <WhiteHeader
        text={'Earnings'}
        icon={require('../../../assets/icons/earning.png')}
        onPress={() => navigation.goBack()}
      />
      {/* Current Balance */}
      <View style={styles.currentBalance}>
        <Text style={styles.text1}>£0</Text>
        <Text style={styles.text2}>Current Balance</Text>
      </View>
      {/* Analytics */}
      <Title
        text={'Analytics'}
        Icon={require('../../../assets/icons/analytics.png')}
      />

      {/* Earnings December */}
      <View style={{marginBottom: '5%'}}>
        <WhiteButton text={'Earnings December'} text2={'$215'} />
      </View>
      {/* Available for withdrawl */}
      <View style={{marginBottom: '5%'}}>
        <WhiteButton text={'Available for withdrawl'} text2={'£125'} />
      </View>
      <View style={{marginBottom: '0%'}}>
        <WhiteButton text={'Completed projects'} text2={'10'} />
      </View>
      {/* Analytics */}
      <Title
        text={'Revenue'}
        Icon={require('../../../assets/icons/revenue.png')}
      />
      {/* Withdraw */}
      <View style={{marginBottom: '5%'}}>
        <WhiteButton text={'Withdraw'} text2={'£100'} />
      </View>

      <View style={{marginBottom: '5%'}}>
        <WhiteButton text={'Pending Clearance'} text2={'£215'} />
      </View>
    </View>
  );
};

export default Earning;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  currentBalance: {
    alignItems: 'center',
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
    paddingBottom: '5%',
    borderColor: colors.DarkGrey,
  },
  text1: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Green,
    fontSize: 55,
  },
  text2: {
    fontFamily: 'OpenSans-Regular',
    color: colors.Black,
    fontSize: 16,
  },
  text3: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Black,
    fontSize: 16,
  },
});
