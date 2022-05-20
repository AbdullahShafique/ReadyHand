import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';
import SmallButton from '../buttons/smallButton';

const ProfileModal = ({visible, onPress}) => {
  return (
    <Modal visible={visible} transparent={true}>
      <Pressable style={styles.container} onPress={onPress}>
        <View style={styles.card}>
          {/*Profile Image  */}
          <View
            style={{
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <ImageBackground
              source={require('../../../assets/images/p5.png')}
              resizeMode={'contain'}
              style={{
                width: Dimensions.get('window').height / 9,
                height: Dimensions.get('window').height / 9,
              }}
              imageStyle={{
                borderRadius: 120 / 2,
                backgroundColor: 100,
              }}>
              <View style={styles.online}></View>
            </ImageBackground>
            {/* Name */}
            <Text style={styles.text1}>Zeeshan Ali</Text>
          </View>
          {/* User Information */}
          <Text style={styles.text2}>User Information</Text>
          {/* Location And Language */}
          <View
            style={{
              borderBottomWidth: 1,
              width: '90%',
              alignSelf: 'center',
              paddingBottom: '5%',
              borderColor: colors.Grey,
            }}>
            {/* Loaction */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../../assets/icons/proposal/pin.png')}
                resizeMode={'contain'}
                style={styles.iconStyle}
              />
              <Text numberOfLines={2} style={styles.text1}>
                80611, Houston Street, United Kingdom
              </Text>
            </View>
            {/* English */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../../assets/icons/proposal/language-black.png')}
                resizeMode={'contain'}
                style={styles.iconStyle}
              />
              <Text numberOfLines={1} style={styles.text1}>
                English
              </Text>
            </View>
          </View>
          {/* Description */}
          <Text style={styles.text2}>Description</Text>
          <Text style={styles.text3}>
            Hi, I have been providing cleaning services since 8 years. My
            ratings are very high due to my services feel free to contact.
          </Text>
          {/* See Full Profile */}
          <View style={{marginTop: '5%'}}>
            <SmallButton
              text={'See Full Profile'}
              height={Dimensions.get('window').height / 15}
              width={Dimensions.get('window').width / 2}
              onPress={() => console.log('See Full Profile')}
            />
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default ProfileModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    height: '70%',
    width: '90%',
    borderRadius: 20,
    paddingVertical: '5%',
  },
  online: {
    width: 12,
    height: 12,
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#249F46',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  text1: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Black,
    fontSize: 16,
    marginTop: '2%',

    width: '80%',
  },
  text2: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Black,
    fontSize: 16,
    marginTop: '5%',
    marginLeft: '5%',
  },
  iconStyle: {
    width: '4%',
    height: '50%',
    marginRight: '5%',
  },
  text3: {
    fontFamily: 'OpenSans-Regular',
    color: colors.Black,
    fontSize: 14,
    width: '90%',
    alignSelf: 'center',
    paddingVertical: '5%',
    borderBottomWidth: 1,
    borderColor: colors.Grey,
  },
});
