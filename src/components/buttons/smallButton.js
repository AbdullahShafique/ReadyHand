import {StyleSheet, Text, View, Pressable, Dimensions} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';

const SmallButton = ({text, onPress, light, height, width, radius}) => {
  return (
    <Pressable
      style={{
        ...styles.container,
        backgroundColor: light ? 'white' : colors.Green,
        height: height,
        width: width,
        borderRadius: radius ? radius : 16,
      }}
      onPress={onPress}>
      <Text style={{...styles.text, color: light ? colors.Green : 'white'}}>
        {text}
      </Text>
    </Pressable>
  );
};

export default SmallButton;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',

    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: colors.Green,
  },
  text: {
    fontFamily: 'OpenSans-Bold',

    fontSize: 16,
  },
});
