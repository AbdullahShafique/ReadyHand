import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';
import MainHeader from '../../components/header/mainHeader';
import UploadButton from '../../components/buttons/uploadButton';

const ProfileVerification = () => {
  return (
    <View style={styles.container}>
      {/*Header  */}
      <MainHeader text={'Profile Verification'} />
      {/*Profile Image  */}
      <ImageBackground
        source={require('../../../assets/images/user_profile.jpg')}
        resizeMode={'contain'}
        style={{width: 120, height: 120, alignSelf: 'center'}}
        imageStyle={{
          borderRadius: 120 / 2,
          backgroundColor: 100,
        }}>
        <Image
          source={require('../../../assets/icons/pencil.png')}
          resizeMode={'contain'}
          style={styles.pencil}
        />
      </ImageBackground>
      <UploadButton title={'Valid ID'} />
    </View>
  );
};

export default ProfileVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  pencil: {
    width: 30,
    height: 30,
    position: 'absolute',
    bottom: 3,
    right: 3,
  },
});
