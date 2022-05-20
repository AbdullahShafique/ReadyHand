import {StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import React from 'react';
import WhiteHeader from '../../../components/header/whiteHeader';
import colors from '../../../globalStyles/colors';
import SmallButton from '../../../components/buttons/smallButton';

const Username = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <WhiteHeader text={'Username'} onPress={() => navigation.goBack()} />
      {/* Text Input */}
      <TextInput style={styles.inputText} placeholder="Username" />
      {/* SmallButton */}
      <View style={{marginTop: '15%'}}>
        <SmallButton
          text={'Update'}
          height={Dimensions.get('window').height / 15}
          width={Dimensions.get('window').width / 2}
        />
      </View>
    </View>
  );
};

export default Username;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputText: {
    // backgroundColor: 100,
    width: '90%',
    alignSelf: 'center',
    borderBottomWidth: 1,
    marginTop: '2.5%',
    fontFamily: 'OpenSans-Regular',
    color: colors.Black,
    fontSize: 14,
  },
});
