import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import colors from '../../../globalStyles/colors';
import SmallButton from '../../../components/buttons/smallButton';
import WhiteHeader from '../../../components/header/whiteHeader';
import WithdrawCard from '../../../components/cards/withdrawCard';

const Withdraw = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <WhiteHeader text={'Withdraw'} onPress={() => navigation.goBack()} />
      {/* Please review details */}
      <Text style={styles.text1}>Please review details</Text>
      <WithdrawCard
        text1={'Transfer To'}
        text2={'Bank Account'}
        text3={'Amount'}
        text4={'£100'}
      />
      {/* Withdraw Button */}
      <View style={{marginTop: '15%'}}>
        <SmallButton
          text={'Withdraw'}
          height={Dimensions.get('window').height / 15}
          width={'50%'}
          onPress={() => console.log('Withdraw')}
        />
      </View>
    </View>
  );
};

export default Withdraw;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text1: {
    fontFamily: 'OpenSans-Regular',
    color: colors.Black,
    fontSize: 16,

    margin: '5%',
  },
});
