import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';
const ScreenHeight = Dimensions.get('screen').height;
const ScreenWidth = Dimensions.get('screen').width;
const MainHeader = ({text, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        source={require('../../../assets/icons/backArrow.png')}
        resizeMode={'contain'}
        style={{width: '4%', marginHorizontal: '5%'}}
      />
      <Text style={styles.text}>{text}</Text>
      <Image
        source={require('../../../assets/icons/Ellipse.png')}
        resizeMode={'contain'}
        style={{
          width: ScreenHeight / 7,
          height: ScreenHeight / 7,
          position: 'absolute',
          right: -20,
          top: -30,
        }}
      />
      <Image
        source={require('../../../assets/icons/Ellipse.png')}
        resizeMode={'contain'}
        style={{
          width: ScreenHeight / 7,
          height: ScreenHeight / 7,
          position: 'absolute',
          right: -50,
          bottom: -30,
        }}
      />
      <View
        style={{
          height: ScreenHeight / 20,
          width: '100%',
          backgroundColor: 'white',
          position: 'absolute',
          bottom: -30,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}></View>
    </Pressable>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.Green,
    height: ScreenHeight / 7,
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'OpenSans-ExtraBold',
    color: 'white',
    fontSize: 24,
    marginLeft: '5%',
  },
});
