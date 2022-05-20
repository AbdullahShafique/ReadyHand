import {StyleSheet, Text, View, Dimensions, Pressable} from 'react-native';
import React from 'react';
import WhiteHeader from '../../../components/header/whiteHeader';
import MainInputField from '../../../components/inputfields/mainInputField';
import SmallButton from '../../../components/buttons/smallButton';

const LinkAccount = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <WhiteHeader text={'Link Account'} onPress={() => navigation.goBack()} />
      {/* First Name */}
      <MainInputField title={'First Name'} placeholder={'First Name'} />
      {/* Last Name */}
      <MainInputField title={'Last Name'} placeholder={'Last Name'} />
      {/* First Name */}
      <MainInputField title={'Email'} placeholder={'Email'} />
      {/* Verify */}
      <View style={{marginTop: '5%'}}>
        <SmallButton
          text={'Verify'}
          height={Dimensions.get('window').height / 16}
          width={Dimensions.get('window').width / 2}
          onPress={() => console.log('Verify')}
        />
      </View>
    </View>
  );
};

export default LinkAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
