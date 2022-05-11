import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';

const ServiceCard = ({title, icon, onPress, isSelected}) => {
  return (
    <Pressable
      style={{
        ...styles.card,
        borderWidth: isSelected ? 2 : 0,
      }}
      onPress={onPress}>
      {/* Image */}
      <Image
        source={icon}
        resizeMode={'contain'}
        style={{
          width: '25%',
          height: '30%',
          alignSelf: 'center',
          marginVertical: '10%',
        }}
      />

      {/* line */}
      <View
        style={{
          backgroundColor: colors.DarkGrey,
          width: '80%',
          height: 1,
        }}></View>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  card: {
    height: Dimensions.get('window').width / 2.5,
    width: Dimensions.get('window').width / 2.5,
    borderRadius: 16,
    margin: '3%',
    borderWidth: 0,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderColor: colors.Green,
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    color: colors.Black,
    fontSize: 16,

    // marginVertical: '5%',
  },
});
