import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';
import MainHeader from './mainHeader';
import MaterialTopTabNavigation from '../../navigation/materialTopTabNavigation';
const MaterialTopTabHeader = ({navigation}) => {
  return (
    <View style={styles.container}>
      <MainHeader text={'Profile'} onPress={() => navigation.goBack()} />
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
        }}></ImageBackground>
      <MaterialTopTabNavigation />
    </View>
  );
};
export default MaterialTopTabHeader;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
