import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';

const ReviewCard = () => {
  return (
    <View style={styles.card}>
      {/* Top */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image style={styles.image} />
          <Text style={styles.text1}>Harry</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
          <Image
            source={require('../../../assets/icons/star.png')}
            resizeMode={'contain'}
            style={{width: 13, height: 13, marginRight: 5}}
          />
          <Text style={styles.text2}>4.5</Text>
        </View>
      </View>
      {/* Description */}
      <Text style={styles.text3} numberOfLines={2}>
        I just wanted to say that I enjoyed working with zeeshan ali because he
        actually created
      </Text>
    </View>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  card: {
    width: '90%',
    height: Dimensions.get('window').height / 7,

    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    paddingVertical: '3%',
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginVertical: '2.5%',
  },
  image: {
    backgroundColor: colors.DarkGrey,
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
  },
  text1: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Black,
    fontSize: 12,
    marginLeft: '15%',
  },
  text2: {
    fontFamily: 'OpenSans-Medium',
    color: '#E9B444',
    fontSize: 12,
  },
  text3: {
    fontFamily: 'OpenSans-Regular',
    color: colors.Black,
    fontSize: 12,
  },
});
