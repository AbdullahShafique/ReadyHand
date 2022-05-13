import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';

const InputFieldWithIcon = ({
  title,
  placeholder,
  value,
  onChangeText,
  ShowPassword,
  autoCapitalize,
  onBlur,
  keyboardType,
  icon,
  iconSize,
  onSubmitEditing,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
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
          keyboardType={keyboardType}
          onSubmitEditing={onSubmitEditing}
        />
        {/*Icon */}

        <Pressable onPress={onPress}>
          <Image
            source={icon}
            resizeMode={'contain'}
            style={{
              width: iconSize,
              height: iconSize,
              //  backgroundColor: 100,
            }}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default InputFieldWithIcon;
const styles = StyleSheet.create({
  container: {marginTop: '5%', marginBottom: '5%'},
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
    width: '90%',
    height: Dimensions.get('window').height / 15,
    borderRadius: 16,
    paddingHorizontal: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
