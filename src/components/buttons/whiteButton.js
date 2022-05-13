import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';

const WhiteButton = ({text, Icon, text2}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      {Icon ? (
        <Image
          source={Icon}
          resizeMode={'contain'}
          style={{width: '5%', height: '30%'}}
        />
      ) : null}
      {text2 ? <Text style={styles.text2}>{text2}</Text> : null}
    </View>
  );
};

export default WhiteButton;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: Dimensions.get('window').height / 14,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: '5%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    color: colors.Black,
    fontSize: 16,
  },
  text2: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Black,
    fontSize: 16,
  },
});
