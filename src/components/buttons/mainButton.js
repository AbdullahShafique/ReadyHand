import {StyleSheet, Text, View, Pressable, Dimensions} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';

const MainButton = ({text, onPress, light}) => {
  return (
    <Pressable
      style={{
        ...styles.container,
        backgroundColor: light ? 'white' : colors.Green,
      }}
      onPress={onPress}>
      <Text style={{...styles.text, color: light ? colors.Green : 'white'}}>
        {text}
      </Text>
    </Pressable>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 14,
    width: '75%',
    alignSelf: 'center',
    borderRadius: 16,
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
