import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';

const WhiteHeader = ({onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        source={require('../../../assets/icons/backArrow.png')}
        resizeMode={'contain'}
        style={{
          tintColor: colors.Black,
          width: '4%',
          height: '80%',
          marginRight: '5%',
        }}
      />

      <Text style={styles.text}>Clearing</Text>
    </Pressable>
  );
};

export default WhiteHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: '6%',
    alignItems: 'center',
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
    marginTop: '5%',
    borderColor: colors.Grey,
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Black,
    fontSize: 16,
  },
});
