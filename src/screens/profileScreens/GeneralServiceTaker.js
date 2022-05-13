import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import colors from '../../globalStyles/colors';
import colors from '../../globalStyles/colors';

const GeneralServiceTaker = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <Text style={styles.lanText}>Languages</Text>
          <View style={styles.verticalLine}></View>
          <View style={styles.languageContainer}>
            <Image
              style={styles.ImageStyle}
              source={require('../../../assets/icons/proposal/language-black.png')}
            />
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.languageTextStyle}>English</Text>
              <Text style={styles.languageType}>Fluent</Text>
            </View>
          </View>

          <View style={styles.languageContainer}>
            <Image
              style={styles.ImageStyle}
              source={require('../../../assets/icons/proposal/language-black.png')}
            />
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.languageTextStyle}>Urdu</Text>
              <Text style={styles.languageType}>Native</Text>
            </View>
          </View>

          <View style={styles.languageContainer}>
            <Image
              style={styles.ImageStyle}
              source={require('../../../assets/icons/proposal/language-black.png')}
            />

            <View style={{flexDirection: 'column', paddingBottom: hp(1.3)}}>
              <Text style={styles.languageTextStyle}>Chinese</Text>
              <Text style={styles.languageType}>Beginner</Text>
            </View>
          </View>
        </View>

        <View style={styles.mainContainer}>
          <Text style={styles.lanText}>Description</Text>
          <View style={styles.verticalLine}></View>
          <Text style={styles.descText}>
            I am Expert of house cleaning. I have been doing thi since 7 years.
            I have high tech equipment.
          </Text>
        </View>

        <View style={styles.mainContainer}>
          <Text style={styles.lanText}>Skills</Text>
          <View style={styles.verticalLine}></View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.greyContainer}>
              <Text style={styles.Tagtext}>House Cleaning</Text>
              <Image
                style={styles.deletIconStyle}
                source={require('../../../assets/icons/proposal/dele-icon3.png')}
              />
            </View>

            <View style={[styles.greyContainer, {width: wp(28)}]}>
              <Text style={styles.Tagtext}>Cleaning</Text>
              <Image
                style={styles.deletIconStyle}
                source={require('../../../assets/icons/proposal/dele-icon3.png')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default GeneralServiceTaker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainer: {
    width: wp(85),
    alignSelf: 'center',
    elevation: 5,
    backgroundColor: '#fff',
    // height: hp(10),
    borderRadius: wp(85) / 25,
    marginVertical: hp(2.6),
  },
  lanText: {
    color: colors.Black,
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
    marginLeft: wp(3),
    marginVertical: hp(1),
  },
  verticalLine: {
    width: wp(78),
    borderWidth: 1,
    // color: colors.Grey,
    borderColor: colors.Grey,
    alignSelf: 'center',
  },
  ImageStyle: {
    width: wp(4.4),
    height: hp(3),
    resizeMode: 'contain',
    marginHorizontal: wp(4),
  },
  languageTextStyle: {
    color: colors.DarkGrey,
    fontSize: 10,
    fontFamily: 'OpenSans-Regular',
  },
  languageType: {
    color: colors.Black,
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
  },
  languageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(0.8),
  },
  descText: {
    color: colors.ExtraDarkGrey,
    fontFamily: 'OpenSans-Regular',
    marginHorizontal: wp(5),
    marginVertical: hp(2),
    marginBottom: hp(3),
  },
  greyContainer: {
    width: hp(21),
    backgroundColor: '#dadada',
    height: hp(5),
    marginHorizontal: wp(5),
    marginVertical: hp(2),
    borderRadius: hp(20) / 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
  },
  Tagtext: {
    color: colors.ExtraDarkGrey,
  },
  deletIconStyle: {
    width: hp(2),
    resizeMode: 'contain',
  },
});
