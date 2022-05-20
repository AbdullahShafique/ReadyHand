import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../globalStyles/colors';

const ProposalCard = ({item, onPress}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.optionPosition}>
        <Image
          style={{width: wp(0.7)}}
          resizeMode={'contain'}
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
          <Text numberOfLines={2} style={styles.text1}>
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
          <Text style={styles.iconText}>£ 10.00/Hr</Text>
        </View>

        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require('../../../assets/icons/proposal/langauge.png')}
          />
          <Text style={styles.iconText}>Spanish</Text>
        </View>
      </View>
      <View style={styles.verticalLine}></View>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          resizeMethod="auto"
          source={require('../../../assets/icons/proposal/profile.png.png')}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: wp(70),
            // backgroundColor: 'red',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.profileText}>{item.name}</Text>
          <Pressable style={styles.chatContainer} onPress={onPress}>
            <Image
              style={styles.chaticon}
              source={require('../../../assets/icons/proposal/chat-icon.png')}
            />
            <Text style={{fontFamily: 'OpenSans-Bold', color: colors.Green}}>
              Chat
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text numberOfLines={2} style={styles.freelancerDes}>
          I can do this very efficiently. you can see my services and reviews as
          a reference.
        </Text>
      </View>
    </View>
  );
};

export default ProposalCard;
const styles = StyleSheet.create({
  mainContainer: {
    width: wp(90),
    height: hp(38),
    backgroundColor: '#fff',
    borderRadius: wp(85) / 20,
    elevation: 5,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10,
  },
  optionPosition: {position: 'absolute', right: wp(4), top: hp(-1.5)},

  containerOne: {
    marginVertical: hp(2),
    flexDirection: 'row',
    backgroundColor: 'white',
    width: wp(81),
    height: hp(10),
    alignItems: 'center',
  },
  image1: {
    width: wp(18),
  },
  text1: {
    color: '#000',
    width: wp(56),
    // fontWeight: '400',
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
    paddingTop: hp(1.3),
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
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(80),
    paddingBottom: '5%',
    // backgroundColor: 'blue',
  },
  iconContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
    height: hp(2.2),
    width: wp(25),
  },
  icon: {
    width: wp(4.4),

    resizeMode: 'contain',
    height: hp(4),
  },
  iconText: {
    color: colors.DarkGrey,
    marginLeft: 10,
    fontFamily: 'OpenSans-Regular',
  },
  profileImage: {
    width: wp(10),
    resizeMode: 'contain',
    borderRadius: wp(10) / 2,
    height: hp(5),
  },
  profileText: {
    color: '#000',
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    marginLeft: wp(3),
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  chatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chaticon: {
    width: wp(4),
    resizeMode: 'contain',
    marginRight: wp(2),
  },
  freelancerDes: {
    width: wp(70),
    fontFamily: 'OpenSans-Regular',
    color: '#000',
  },
  textContainer: {
    width: wp(70),
    // backgroundColor: 'red',
    marginLeft: wp(14),
  },
});
