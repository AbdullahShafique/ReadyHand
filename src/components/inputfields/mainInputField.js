import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
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
  ShowPassword = true,
  autoCapitalize,
  onBlur,
  eye,
  onEyePress,
  keyboardType,
  Height = 15,
  MarginTop = '5%',
  multiline,
}) => {
  return (
    <View style={{...styles.container, marginTop: MarginTop}}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      <View
        style={{
          ...styles.inputField,
          height: Dimensions.get('window').height / Height,
        }}>
        <TextInput
          placeholder={placeholder}
          multiline={multiline}
          placeholderTextColor={colors.DarkGrey}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={!ShowPassword}
          autoCapitalize={autoCapitalize}
          onBlur={onBlur}
          underlineColorAndroid="transparent"
          style={{
            width: '100%',
            textAlignVertical: multiline ? 'top' : 'center',
          }}
          keyboardType={keyboardType}
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
    </View>
  );
};

export default MainInputField;

const styles = StyleSheet.create({
  container: {},
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
    borderRadius: 16,
    paddingHorizontal: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    //alignItems: 'center',
    justifyContent: 'space-between',
  },
});
