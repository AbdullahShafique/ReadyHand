import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Pressable,
} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';

const MessageCard = ({navigation, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {/*Profile Image  */}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <ImageBackground
          source={require('../../../assets/images/p5.png')}
          resizeMode={'contain'}
          style={{
            width: Dimensions.get('window').height / 14,
            height: Dimensions.get('window').height / 14,
          }}
          imageStyle={{
            borderRadius: 120 / 2,
            backgroundColor: 100,
          }}>
          <View style={styles.online}></View>
        </ImageBackground>
        {/* Name and msg */}
        <View style={{width: '80%', marginLeft: '5%'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {/* Name */}
            <Text style={styles.text1}>Zeeshan Ali</Text>
            {/* Date */}
            <Text style={styles.text2}>Sep, 7, 4:00PM</Text>
          </View>

          <Text style={styles.text3} numberOfLines={1}>
            Good 🙂
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default MessageCard;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    height: Dimensions.get('window').height / 8,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: colors.Grey,
  },
  online: {
    width: 9,
    height: 9,
    position: 'absolute',
    bottom: 3,
    right: 3,
    backgroundColor: '#249F46',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  text1: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Black,
    fontSize: 16,
  },
  text2: {
    fontFamily: 'OpenSans-Regular',
    color: colors.DarkGrey,
    fontSize: 14,
  },
  text3: {
    fontFamily: 'OpenSans-Regular',
    color: colors.Black,
    fontSize: 14,
  },
});
