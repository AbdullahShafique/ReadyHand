import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import colors from '../../globalStyles/colors';
import MainHeader from '../../components/header/mainHeader';
import MainButton from '../../components/buttons/mainButton';
import {AuthContext} from '../../Authentication/authProvider';

const SelectUserType = ({navigation}) => {
  const {logout, setUserType} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      {/* Header */}
      <MainHeader text={'Who are you?'} onPress={() => logout()} />
      {/*Top Text  */}
      <View style={{marginTop: '2%'}}>
        <Text style={styles.text1}>Are you a</Text>
        <Text style={styles.text2}>Select your role</Text>
      </View>
      {/* Middle Buttons */}
      <View style={styles.middleButtons}>
        <MainButton
          text={'I Provide Services'}
          light={true}
          onPress={() => {
            setUserType('serviceProvider');
            navigation.navigate('ProfileSetup');
          }}
        />
        <MainButton
          text={'I Need a Service'}
          light={true}
          onPress={() => {
            setUserType('serviceTaker');
            navigation.navigate('ProfileSetup');
          }}
        />
      </View>
    </View>
  );
};

export default SelectUserType;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text1: {
    fontFamily: 'OpenSans-ExtraBold',
    color: colors.Green,
    fontSize: 24,
    marginLeft: '5%',
  },
  text2: {
    fontFamily: 'OpenSans-Regular',
    color: colors.Black,
    fontSize: 16,
    marginLeft: '5%',
  },
  middleButtons: {
    alignItems: 'center',

    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});
