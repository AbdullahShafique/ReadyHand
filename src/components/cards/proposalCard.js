import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../globalStyles/colors';

const ProposalCard = ({item, onPress}) => {
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
        {/* Time */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../../assets/icons/time.png')}
            resizeMode={'contain'}
            style={{width: 14, height: 14, marginRight: 15}}
          />
          <Text style={styles.text3}>2Hrs</Text>
        </View>
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
      {/* Bottom */}
      <View style={styles.bottom}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/p5.png')}
              resizeMode={'contain'}
              style={{width: 30, height: 30, borderRadius: 15}}
            />
            <Text style={styles.text4}>Zeeshan Ali</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <Image
              source={require('../../../assets/icons/proposal/chat-icon.png')}
              resizeMode={'contain'}
              style={{width: 16, height: 16, borderRadius: 15}}
            />
            <Text style={styles.text5}>Chat</Text>
          </View>
        </View>
        <View>
          <Text style={styles.text6}>
            I can do this very efficiently. you can see my services and reviews
            as a reference.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProposalCard;
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height / 3,
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
    padding: '5%',
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
