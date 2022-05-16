import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';
const HomeHeader = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi, Username</Text>
      {/* Profile Image */}
      <Pressable onPress={onPress}>
        <Image
          source={require('../../../assets/images/user_profile.jpg')}
          resizeMode={'contain'}
          style={{
            width: 35,
            height: 35,
            alignSelf: 'center',
            borderRadius: 120 / 2,
            backgroundColor: 100,
          }}
        />
      </Pressable>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 100,
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',

    alignItems: 'center',
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Black,
    fontSize: 24,
  },
});
