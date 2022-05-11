import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';
import MainHeader from '../../components/header/mainHeader';
import UploadButton from '../../components/buttons/uploadButton';
import MainButton from '../../components/buttons/mainButton';

const ProfileVerification = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/*Header  */}
      <MainHeader
        text={'Profile Verification'}
        onPress={() => navigation.goBack()}
      />
      {/*Profile Image  */}
      <ScrollView showsVerticalScrollIndicator={false}>
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
        {/* Valid ID */}
        <UploadButton title={'Valid ID'} />
        {/* Proof of Address */}
        <UploadButton title={'Proof of Address'} />
        {/* DBS Certificate */}
        <UploadButton title={'DBS Certificate'} />
        {/*Bottom Text  */}
        <View style={{flexDirection: 'row', marginVertical: '5%'}}>
          <Text style={styles.text1}>Note:</Text>
          <Text style={styles.text2}>Please upload only jpg/pdf/jpeg</Text>
        </View>
        {/* Submit Profile */}
        <View style={{marginVertical: '5%'}}>
          <MainButton
            text={'Submit Profile'}
            onPress={() => navigation.navigate('ChooseServices')}
          />
        </View>
      </ScrollView>
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
  text1: {
    fontFamily: 'OpenSans-Bold',
    color: colors.ExtraDarkGrey,
    fontSize: 12,
    marginHorizontal: '5%',
  },
  text2: {
    fontFamily: 'OpenSans-Regular',
    color: colors.DarkGrey,
    fontSize: 12,
  },
});
