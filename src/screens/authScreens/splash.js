import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ReadyHands</Text>
      {/* Animated Loader */}
      <Image
        source={require('../../../assets/icons/animated_loader.png')}
        resizeMode={'contain'}
        style={styles.loader}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Green,
    fontSize: 32,
  },
  loader: {
    position: 'absolute',
    width: 236,
    height: 214,
    top: Dimensions.get('window').height / 1.6,
  },
});
