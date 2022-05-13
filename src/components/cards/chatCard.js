import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';
import WhiteButton from '../buttons/whiteButton';

const ChatCard = ({left, right, text}) => {
  return (
    <View style={styles.container}>
      {left ? (
        <ImageBackground
          source={require('../../../assets/images/p5.png')}
          resizeMode={'contain'}
          style={{
            width: Dimensions.get('window').height / 15,
            height: Dimensions.get('window').height / 15,
          }}
          imageStyle={{
            borderRadius: 120 / 2,
            backgroundColor: 100,
          }}>
          <View style={styles.online}></View>
        </ImageBackground>
      ) : null}
      {/* Text */}
      <View
        style={{
          width: '90%',
          justifyContent: 'center',
        }}>
        <WhiteButton text={text} />
      </View>
      {right ? (
        <ImageBackground
          source={require('../../../assets/images/p5.png')}
          resizeMode={'contain'}
          style={{
            width: Dimensions.get('window').height / 15,
            height: Dimensions.get('window').height / 15,
          }}
          imageStyle={{
            borderRadius: 120 / 2,
            backgroundColor: 100,
          }}>
          <View style={styles.online}></View>
        </ImageBackground>
      ) : null}
    </View>
  );
};

export default ChatCard;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: '5%',
  },
  online: {
    width: 8,
    height: 8,
    position: 'absolute',
    bottom: 3,
    right: 3,
    backgroundColor: '#249F46',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
});
