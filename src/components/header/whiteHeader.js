import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';

const WhiteHeader = ({
  onPress,
  text,
  icon,
  text2,
  onPress2,
  text3,
  noRadius,
  bigFonts,
}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {/* Back Button */}
        <Pressable onPress={onPress}>
          <Image
            source={require('../../../assets/icons/backArrow.png')}
            resizeMode={'contain'}
            style={styles.backButton}
          />
        </Pressable>

        {/* Profile Image */}
        {icon ? (
          <Image
            source={icon}
            resizeMode={'contain'}
            style={{...styles.profile, borderRadius: noRadius ? 0 : 30 / 2}}
          />
        ) : null}
        <Text style={{...styles.text, fontSize: bigFonts ? 24 : 16}}>
          {text}
        </Text>
      </View>
      {text2 ? (
        <Pressable onPress={onPress2}>
          <Text style={styles.text2}>{text2}</Text>
        </Pressable>
      ) : null}
      {text3 ? (
        <Pressable onPress={onPress2}>
          <Text style={styles.text3}>{text3}</Text>
        </Pressable>
      ) : null}
    </View>
  );
};

export default WhiteHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: Dimensions.get('window').height / 17,
    alignItems: 'center',
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
    marginTop: '5%',
    borderColor: colors.DarkGrey,
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Black,

    marginLeft: '10%',
  },
  backButton: {
    tintColor: colors.Black,
    width: 16,
    height: 14,
  },
  profile: {
    height: 25,
    width: 25,

    marginLeft: '10%',
  },

  text2: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Green,
    fontSize: 14,
  },
  text3: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Black,
    fontSize: 16,
  },
});
