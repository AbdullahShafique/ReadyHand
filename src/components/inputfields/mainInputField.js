import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Keyboard,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';

const MainInputField = ({
  title,
  placeholder,
  value,
  onChangeText,
  ShowPassword,
  autoCapitalize,
  onBlur,
  eye,
  onEyePress,
}) => {
  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputField}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.DarkGrey}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={!ShowPassword}
          autoCapitalize={autoCapitalize}
          onBlur={onBlur}
          underlineColorAndroid="transparent"
          style={{width: '90%'}}
        />
        {/*eye  */}
        {eye ? (
          <Pressable onPress={onEyePress}>
            <Image
              source={
                ShowPassword
                  ? require('../../../assets/icons/show_eye.png')
                  : require('../../../assets/icons/hide_eye.png')
              }
              resizeMode={'contain'}
              style={{
                width: 15,
                height: 18,
                tintColor: colors.Green,
              }}
            />
          </Pressable>
        ) : null}
      </View>
    </Pressable>
  );
};

export default MainInputField;

const styles = StyleSheet.create({
  container: {marginTop: '7%'},
  title: {
    fontFamily: 'OpenSans-Bold',
    color: colors.DarkGrey,
    fontSize: 16,
    marginLeft: '5%',
    marginBottom: '2%',
  },
  inputField: {
    fontFamily: 'OpenSans-Regular',
    color: colors.Black,
    fontSize: 16,
    backgroundColor: colors.Grey,
    width: '85%',
    height: Dimensions.get('window').height / 15,
    borderRadius: 16,
    paddingHorizontal: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
