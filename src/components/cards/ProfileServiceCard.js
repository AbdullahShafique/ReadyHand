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
import SmallButton from '../buttons/smallButton';
const ProfileServiceCard = ({item, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          source={require('../../../assets/images/p1.png')}
          resizeMode={'contain'}
          style={{
            width: Dimensions.get('window').width * 0.2,
            height: Dimensions.get('window').width * 0.18,
            borderRadius: 8,
          }}
        />
        <View
          style={{
            width: '60%',
            height: Dimensions.get('window').width * 0.18,
            justifyContent: 'space-between',
          }}>
          <Text numberOfLines={2} style={styles.text1}>
            I need a professional for house cleaning. I need a professional for
            house cleaning.
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../../assets/icons/proposal/location.png')}
              resizeMode={'contain'}
              style={{
                width: 20,
                height: 20,

                marginRight: '5%',
              }}
            />
            <Text style={styles.text2} numberOfLines={1}>
              197 Cedar Street London
            </Text>
          </View>
        </View>
        <Image
          source={require('../../../assets/icons/proposal/option.png')}
          resizeMode={'contain'}
          style={{
            width: '5%',
            height: '20%',
          }}
        />
      </View>
      {/* Middle */}
      <View style={styles.middle}>
        {/* Rate */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../../assets/icons/rate.png')}
            resizeMode={'contain'}
            style={{width: 14, height: 14, marginRight: 15}}
          />
          <Text style={styles.text3}>£ 10.00/Hr</Text>
        </View>
        {/* Language */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../../assets/icons/proposal/langauge.png')}
            resizeMode={'contain'}
            style={{width: 14, height: 14, marginRight: 15}}
          />
          <Text style={styles.text3}>Spanish</Text>
        </View>
      </View>
      {/* Send Proposal */}

      <SmallButton
        text={'Send Proposal'}
        height={'20%'}
        width={'50%'}
        radius={8}
      />
    </View>
  );
};
export default ProfileServiceCard;
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height / 3.5,
    marginTop: '5%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 16,
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
    paddingTop: '4%',
    paddingBottom: '2%',
    alignSelf: 'center',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text1: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: colors.Black,
  },
  text2: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
    color: colors.Black,
  },
  middle: {
    height: '20%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: colors.DarkGrey,
    paddingHorizontal: '15%',
  },
  text3: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
    color: colors.ExtraDarkGrey,
  },
  bottom: {
    height: '40%',
    justifyContent: 'space-between',
  },
  text4: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    color: colors.Black,
    marginLeft: '5%',
  },
  text5: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    color: colors.Green,
    marginLeft: '5%',
  },
  text6: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: colors.Black,
    alignSelf: 'center',
  },
});
