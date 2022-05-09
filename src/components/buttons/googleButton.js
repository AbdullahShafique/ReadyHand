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

const GoogleButton = ({text, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {/*Google Logo  */}
      <Image
        source={require('../../../assets/icons/google_icon.png')}
        resizeMode={'contain'}
        style={styles.iconStyle}
      />
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default GoogleButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: Dimensions.get('window').height / 14,
    width: '75%',
    alignSelf: 'center',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: colors.Green,
    flexDirection: 'row',
    marginVertical: 10,
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Black,
    fontSize: 16,
  },
  iconStyle: {
    width: '10%',
  },
});
