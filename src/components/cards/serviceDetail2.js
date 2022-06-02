import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';

const ServiceDetail = ({onPress}) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image
        source={require('../../../assets/images/p4.png')}
        resizeMode={'contain'}
        style={{
          width: Dimensions.get('window').width * 0.2,
          height: Dimensions.get('window').width * 0.2,
          borderRadius: 50,
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
      <View
        style={{
          width: '60%',
          height: '80%',

          justifyContent: 'center',
        }}>
        {/* title and rate */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {/* Title of Services */}
          <Text style={styles.text4}>Title of Services</Text>
          <Text style={styles.text3}>£8.00/Hr</Text>
        </View>

        {/* Description */}
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.text5}>
          Description of the service provided by the service provider
        </Text>
      </View>
    </Pressable>
  );
};

export default ServiceDetail;

const styles = StyleSheet.create({
  card: {
    width: '90%',
    height: Dimensions.get('window').height / 6,
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
    marginLeft: '5%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '5%',
    marginBottom: '5%',
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
