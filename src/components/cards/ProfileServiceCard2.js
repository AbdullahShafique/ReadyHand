import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../globalStyles/colors';
const ProfileServiceCard2 = ({item, onPress, isExpired}) => {
  return (
    <Pressable onPress={onPress} style={styles.mainContainer}>
      <View style={styles.optionPosition}>
        <Image
          style={{width: wp(0.7), resizeMode: 'contain'}}
          source={require('../../../assets/icons/proposal/option.png')}
        />
      </View>
      <View style={styles.containerOne}>
        <Image
          style={styles.image1}
          resizeMode="contain"
          source={require('../../../assets/icons/proposal/display-image.png')}
        />
        <View style={{marginLeft: wp(3)}}>
          {isExpired ? <Text style={styles.expiredText}>Expired</Text> : null}
          <Text style={styles.text1}>
            I need a professional for house cleaning.
          </Text>
          <View style={styles.locationConatainer}>
            <Image
              resizeMode="contain"
              style={{width: wp(6)}}
              source={require('../../../assets/icons/proposal/location.png')}
            />
            <Text style={styles.locationText}>{item.addres}</Text>
          </View>
        </View>
      </View>
      <View style={styles.verticalLine}></View>
      <View style={styles.iconMainContainer}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require('../../../assets/icons/proposal/time.png')}
          />
          <Text style={styles.iconText}>2Hrs</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require('../../../assets/icons/proposal/money-card.png')}
          />
          <Text style={styles.iconText}>£ 8.00/Hr</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require('../../../assets/icons/proposal/langauge.png')}
          />
          <Text style={styles.iconText}>Spanish</Text>
        </View>
      </View>
    </Pressable>
  );
};
export default ProfileServiceCard2;
const styles = StyleSheet.create({
  mainContainer: {
    width: wp(90),
    // height: hp(38),
    backgroundColor: 'white',
    borderRadius: wp(85) / 20,
    elevation: 5,
    flexDirection: 'column',
    alignItems: 'center',
    // margin: 10,
    alignSelf: 'center',
    marginVertical: hp(1.3),
  },
  optionPosition: {position: 'absolute', right: wp(4), top: hp(-1.5)},
  containerOne: {
    marginVertical: hp(2),
    flexDirection: 'row',
    // backgroundColor: 'red',
    width: wp(78),
    height: hp(10),
    alignItems: 'center',
  },
  image1: {
    width: wp(18),
  },
  text1: {
    color: '#000',
    width: wp(56),
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
  },
  locationConatainer: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    height: hp(5),
    alignItems: 'center',
    // justifyContent: 'center',
  },
  locationText: {
    color: '#000',
    // fontWeight: '700',
    marginLeft: wp(1.5),
    paddingTop: hp(0.5),
    fontFamily: 'OpenSans-Bold',
  },
  verticalLine: {
    width: wp(80),
    borderWidth: 1,
    // color: colors.Grey,
    borderColor: colors.Grey,
  },
  iconMainContainer: {
    paddingVertical: hp(1.6),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: wp(80),
    paddingBottom: 20,
    // backgroundColor: 'blue',
  },
  iconContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',

    height: hp(2.2),
    //width: wp(25),
  },
  icon: {
    width: wp(4.4),
    resizeMode: 'contain',
  },
  iconText: {
    color: colors.DarkGrey,
    marginLeft: 10,
    fontFamily: 'OpenSans-Regular',
  },
  expiredText: {
    color: 'crimson',
    marginTop: '5%',
    fontFamily: 'OpenSans-Bold',
    fontSize: 12,
  },
});
