import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../../globalStyles/colors';
import WhiteHeader from '../../../components/header/whiteHeader';
import DoubleWhiteButtons from '../../../components/buttons/doubleWhiteButtons';

const Withdraw = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <WhiteHeader text={'Withdraw'} onPress={() => navigation.goBack()} />
      {/* Please review details */}
      <Text style={styles.text1}>Please review details</Text>
      <DoubleWhiteButtons
        text1={'Current Balance'}
        text2={'£100'}
        text3={'Available for withdrawl'}
        text4={'£80'}
      />
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
