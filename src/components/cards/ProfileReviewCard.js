import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../globalStyles/colors';
const star = [
  {image: require('../../../assets/icons/proposal/Star.png')},
  {image: require('../../../assets/icons/proposal/Star.png')},
  {image: require('../../../assets/icons/proposal/Star.png')},
  {image: require('../../../assets/icons/proposal/Star.png')},
  {image: require('../../../assets/icons/proposal/Star.png')},
];

const ProfileReviewCard = ({item}) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <Image
            style={styles.profileImage}
            source={require('../../../assets/icons/proposal/profile.png.png')}
          />

          <View style={styles.rightContainer}>
            <View style={styles.ratingContainer}>
              {star.map((uri, index) => {
                return (
                  <Image
                    style={styles.starConatiner}
                    source={uri.image}
                    key={index}
                  />
                );
              })}
              <Text style={styles.ratingText}>5.0</Text>
            </View>
            <Text style={styles.cleaningtext}>{item.job}</Text>
            <Text style={styles.requestText}>
              She is a very talented house cleaner. And she knows how to take
              care of expensive things.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileReviewCard;

const styles = StyleSheet.create({
  container: {
    width: wp(85),
    // height: hp(22),
    backgroundColor: '#fff',
    marginVertical: hp(1.3),
    // Horizontal: wp(7.5),
    borderRadius: wp(85) / 25,
    elevation: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    marginTop: hp(3),
    // backgroundColor: 'red',
    width: wp(70),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal: wp(50),
  },
  rightContainer: {
    marginLeft: wp(20),
    // backgroundColor: 'green',
    marginRight: wp(2.5),
    // height: hp(13),
    // paddingVertical: hp(3.5),
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  starConatiner: {
    width: wp(4),
    resizeMode: 'contain',
    height: hp(2),

    marginLeft: wp(1),
    // flexDirection: 'row',
  },
  ratingText: {
    color: colors.DarkGrey,
    paddingLeft: wp(30),
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
  },
  cleaningtext: {
    color: '#000',
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
  },
  requestText: {
    color: '#000',
    fontFamily: 'OpenSans-Regular',
    paddingVertical: hp(1.3),
  },
  profileImage: {
    width: wp(13),
    resizeMode: 'contain',
    borderRadius: wp(15) / 2,
    height: hp(7),
    position: 'absolute',
    left: wp(-4),
    top: hp(0),
  },
});
