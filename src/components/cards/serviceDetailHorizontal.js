import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  Image,
} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';

const ServiceDetailHorizontal = ({onPress}) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image
        source={require('../../../assets/images/p2.png')}
        resizeMode={'contain'}
        style={{
          width: '35%',
          height: '80%',
          borderRadius: 10,
        }}
      />
      {/* vertical Line */}
      <View
        style={{
          width: 1,
          height: '80%',
          backgroundColor: colors.DarkGrey,
        }}></View>
      {/*Text Area  */}
      <View style={{width: '60%', height: '80%'}}>
        {/* ratting and rate */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
            <Image
              source={require('../../../assets/icons/star.png')}
              resizeMode={'contain'}
              style={{width: 12, height: 12, marginRight: '5%'}}
            />
            <Text style={styles.text1}>4.8</Text>
            <Text style={styles.text2}>{`(72)`}</Text>
          </View>

          <Text style={styles.text3}>$50/Hr</Text>
        </View>
        {/* Name */}
        <Text style={styles.text4}>Name</Text>
        {/* Description */}
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.text5}>
          Description of the service provided by the service provider
        </Text>
        {/* Location */}
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../../assets/icons/location.png')}
            resizeMode={'contain'}
            style={{width: 13, height: 13, marginRight: '5%', marginTop: '1%'}}
          />
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.text6}>
            80611, Houston Street, United Kingdom
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ServiceDetailHorizontal;

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get('window').width / 1.2,
    height: Dimensions.get('window').height / 5.2,
    marginRight: 10,
    borderRadius: 17,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '5%',
    marginTop: '5%',
  },
  text1: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Black,
    fontSize: 12,
    marginRight: '5%',
  },
  text2: {
    fontFamily: 'OpenSans-Medium',
    color: colors.DarkGrey,
    fontSize: 12,
  },
  text3: {
    fontFamily: 'OpenSans-SemiBold',
    color: '#E9B444',
    fontSize: 14,
  },
  text4: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Black,
    fontSize: 16,
  },
  text5: {
    fontFamily: 'OpenSans-Regular',
    color: colors.Black,
    fontSize: 12,
    marginVertical: '2%',
  },
  text6: {
    fontFamily: 'OpenSans-Regular',
    color: '#4285F4',
    fontSize: 12,

    width: '90%',
  },
});
