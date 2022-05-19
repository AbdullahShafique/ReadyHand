import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import MainHeader from '../../components/header/mainHeader';
import ServiceTakerProfileTopNavigator from '../../navigation/serviceTakerProfileTopNavigator';

const ServiceTakerProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <MainHeader text={'Profile'} onPress={() => navigation.goBack()} />
      {/*Profile Image  */}
      <ImageBackground
        source={require('../../../assets/images/user_profile.jpg')}
        resizeMode={'contain'}
        style={{
          width: Dimensions.get('window').width / 4,
          height: Dimensions.get('window').width / 4,
          alignSelf: 'center',
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
      </ImageBackground>
      {/* Top Tabs */}
      <ServiceTakerProfileTopNavigator />
    </View>
  );
};

export default ServiceTakerProfile;

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
