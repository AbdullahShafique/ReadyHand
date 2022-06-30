import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';

const ImageDropdownButton = ({
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
        {/* image */}
        <Image
          source={require('../../../assets/images/p1.png')}
          resizeMode={'contain'}
          style={{width: 50, height: 50, borderRadius: 8}}
        />
        {/* Text */}
        <Text numberOfLines={2} style={styles.text}>
          {placeholder}
        </Text>

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

export default ImageDropdownButton;

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
    color: colors.Black,
    fontSize: 16,
    backgroundColor: colors.Grey,
    width: '90%',
    height: Dimensions.get('window').height / 10,
    borderRadius: 16,
    paddingHorizontal: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Black,
    fontSize: 17,
    width: '70%',
  },
});
