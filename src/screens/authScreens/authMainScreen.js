import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';
import GoogleButton from '../../components/buttons/googleButton';
import MainButton from '../../components/buttons/mainButton';

const AuthMainScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/*Center Image  */}
      <Image
        source={require('../../../assets/icons/auth_image.png')}
        resizeMode={'contain'}
        style={styles.centerImage}
      />
      <Text style={styles.text1}>Welcome</Text>
      <Text style={styles.text2}>Manage and offer services</Text>
      <Text style={styles.text3}>{`Seamlessely & Intuitively`}</Text>
      {/*Continue With Google  */}
      <GoogleButton
        text={'Continue With Google'}
        onPress={() => console.log('Google Button Pressed')}
      />
      {/* Create Account */}
      <MainButton
        text={'Create Account'}
        onPress={() => navigation.navigate('Signup')}
      />
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <Text style={styles.text4}>Already have an account? </Text>

        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={styles.text5}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AuthMainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  centerImage: {
    width: '75%',
    alignSelf: 'center',
    height: '35%',
  },
  text1: {
    fontFamily: 'OpenSans-ExtraBold',
    color: colors.Black,
    fontSize: 32,
    marginLeft: '5%',
    marginVertical: '3%',
  },
  text2: {
    fontFamily: 'OpenSans-Regular',
    color: colors.Black,
    fontSize: 16,
    marginLeft: '17%',
  },
  text3: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Black,
    fontSize: 20,
    marginLeft: '17%',
    marginBottom: '5%',
  },
  text4: {
    fontFamily: 'OpenSans-Regular',
    color: colors.DarkGrey,
    fontSize: 16,
  },
  text5: {
    fontFamily: 'OpenSans-ExtraBold',
    color: colors.Green,
    fontSize: 16,
  },
});
