import {StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';

const DoubleInputField = ({
  title,
  value1,
  value2,
  onChangeText1,
  onChangeText2,
  ShowPassword,
  autoCapitalize,
  onBlur1,
  onBlur2,
  eye,
  onEyePress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputField}>
        {/* First */}
        <TextInput
          placeholder={'00 : 00 Am'}
          placeholderTextColor={colors.DarkGrey}
          value={value1}
          onChangeText={onChangeText1}
          secureTextEntry={!ShowPassword}
          autoCapitalize={autoCapitalize}
          onBlur={onBlur1}
          underlineColorAndroid="transparent"
          style={{width: 90, alignItems: 'center'}}
          keyboardType={'numeric'}
        />

        <Text
          style={{
            fontFamily: 'OpenSans-Bold',
            fontSize: 16,
            color: colors.Black,
          }}>
          To
        </Text>
        {/* Second */}
        <TextInput
          placeholder={'00 : 00 Pm'}
          placeholderTextColor={colors.DarkGrey}
          value={value2}
          onChangeText={onChangeText2}
          secureTextEntry={!ShowPassword}
          autoCapitalize={autoCapitalize}
          onBlur={onBlur2}
          underlineColorAndroid="transparent"
          style={{width: 90, alignItems: 'center'}}
          keyboardType={'numeric'}
        />
      </View>
    </View>
  );
};

export default DoubleInputField;

const styles = StyleSheet.create({
  container: {marginTop: '5%'},
  title: {
    fontFamily: 'OpenSans-Bold',
    color: colors.DarkGrey,
    fontSize: 16,
    marginLeft: '5%',
    marginBottom: '2%',
  },
  inputField: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    backgroundColor: colors.Grey,
    width: '85%',
    height: Dimensions.get('window').height / 15,
    borderRadius: 16,
    paddingHorizontal: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
