import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';

import colors from '../../globalStyles/colors';

const BookingCard = () => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source={require('../../../assets/images/p4.png')}
        resizeMode={'contain'}
        style={{
          width: '25%',
          height: '100%',
          backgroundColor: 100,
          marginRight: '5%',
          borderRadius: 8,
        }}
      />
      {/* Description */}

      <Text style={styles.text} numberOfLines={3}>
        I can clean your house in less time and efficiently. My rate is very
        affordable and service is very satisfactory.
      </Text>
    </View>
  );
};

export default BookingCard;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: Dimensions.get('window').width / 6,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: '5%',
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    color: colors.Black,
    fontSize: 16,
    width: '70%',
  },
});
