import {StyleSheet, Text, View, Pressable, Dimensions} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';

const MainButton = ({text, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.Green,
    height: Dimensions.get('window').height / 14,
    width: '75%',
    alignSelf: 'center',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    color: 'white',
    fontSize: 16,
  },
});
