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

const WhiteHeader = ({onPress, text, icon}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {/* Back Button */}
      <Image
        source={require('../../../assets/icons/backArrow.png')}
        resizeMode={'contain'}
        style={styles.backButton}
      />
      {/* Profile Image */}
      {icon ? (
        <Image source={icon} resizeMode={'contain'} style={styles.profile} />
      ) : null}
      <Text style={styles.text}>{text}</Text>
    </Pressable>
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
    borderColor: colors.Grey,
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Black,
    fontSize: 16,
  },
  backButton: {
    tintColor: colors.Black,
    width: '4%',
    height: '80%',
    marginRight: '5%',
  },
  profile: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    marginRight: '5%',
  },
});
