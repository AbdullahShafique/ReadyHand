import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
  ImageBackground,
} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';
const ScreenHeight = Dimensions.get('screen').height;
const ScreenWidth = Dimensions.get('screen').width;
const ServiceTakerProfileHeader = ({text, onPress, Icon, Usename}) => {
  return (
    <View style={styles.container}>
      {/*Profile Image  */}
      <ImageBackground
        source={require('../../../assets/images/user_profile.jpg')}
        resizeMode={'contain'}
        style={{
          width: Dimensions.get('window').width / 4,
          height: Dimensions.get('window').width / 4,
          position: 'absolute',
          bottom: '-25%',
          left:
            Dimensions.get('window').width / 2 -
            Dimensions.get('window').width / 8,
          alignItems: 'center',
        }}
        imageStyle={{
          borderRadius: 120 / 2,
          backgroundColor: 100,
        }}>
        <Image
          source={require('../../../assets/icons/pencil.png')}
          resizeMode={'contain'}
          style={styles.pencil}
        />
        <Text style={styles.text2}>{Usename}</Text>
      </ImageBackground>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: ScreenHeight / 7,
          alignItems: 'center',
        }}>
        <Pressable
          style={{width: '4%', marginHorizontal: '5%'}}
          onPress={onPress}>
          <Image
            source={require('../../../assets/icons/backArrow.png')}
            resizeMode={'contain'}
            style={{width: '100%'}}
          />
        </Pressable>

        <Text style={styles.text}>{text}</Text>
      </View>

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
          top: 35,
        }}
      />
    </View>
  );
};

export default ServiceTakerProfileHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.Green,
    height: ScreenHeight / 4.5,
    flexDirection: 'row',
    marginBottom: Dimensions.get('window').height / 9,
  },
  text: {
    fontFamily: 'OpenSans-ExtraBold',
    color: 'white',
    fontSize: 24,
    marginLeft: '5%',
  },
  pencil: {
    width: 30,
    height: 30,
    position: 'absolute',
    bottom: 3,
    right: 3,
  },
  text2: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Black,
    fontSize: 16,
    position: 'absolute',
    bottom: '-30%',
  },
});
