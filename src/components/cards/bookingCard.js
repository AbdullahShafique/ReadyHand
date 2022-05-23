import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';

import colors from '../../globalStyles/colors';

const BookingCard = ({text}) => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source={require('../../../assets/images/p4.png')}
        resizeMode={'contain'}
        style={{
          width: '25%',
          height: '80%',
          backgroundColor: 100,
          marginRight: '5%',
          borderRadius: 8,
        }}
      />
      {/* Description */}

      <Text style={styles.text} numberOfLines={3}>
        {text}
      </Text>
    </View>
  );
};

export default BookingCard;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: Dimensions.get('window').width / 5,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: '5%',
    borderBottomWidth: 1,
    borderColor: colors.DarkGrey,
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    color: colors.Black,
    fontSize: 16,
    width: '70%',
  },
});
