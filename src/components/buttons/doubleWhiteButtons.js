import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';

const DoubleWhiteButtons = ({text1, text2, text3, text4}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.text}>{text1}</Text>
        <Text style={styles.text2}>{text2}</Text>
      </View>
      <View
        style={{
          width: '100%',
          height: '1%',
          backgroundColor: colors.Grey,
        }}></View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.text}>{text3}</Text>
        <Text style={styles.text2}>{text4}</Text>
      </View>
    </View>
  );
};

export default DoubleWhiteButtons;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: Dimensions.get('window').height / 7,
    borderRadius: 10,
    alignSelf: 'center',

    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'space-evenly',
    paddingHorizontal: '5%',
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    color: colors.Black,
    fontSize: 16,
  },
  text2: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Green,
    fontSize: 16,
  },
});
