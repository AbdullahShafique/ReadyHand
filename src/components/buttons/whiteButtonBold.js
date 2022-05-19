import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Switch,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';

const WhiteButtonBold = ({
  text,
  onValueChange,
  value,
  Icon,
  RightArrow,
  onChange,
  onPress,
  red,
  switchButton,
}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {/* Icon */}
        {Icon ? (
          <Image source={Icon} resizeMode={'contain'} style={styles.icon} />
        ) : null}
        <Text style={{...styles.text, color: red ? 'red' : colors.Black}}>
          {text}
        </Text>
      </View>
      {/* Switch */}
      {switchButton ? (
        <Switch
          trackColor={{false: colors.Grey, true: colors.Grey}}
          thumbColor={1 ? colors.Green : colors.Green}
          ios_backgroundColor={colors.Grey}
          onValueChange={onValueChange}
          value={value}
          onChange={onChange}
        />
      ) : null}
      {/* Right Arrow */}
      {RightArrow ? (
        <Image
          source={require('../../../assets/icons/rightArrow.png')}
          resizeMode={'contain'}
          style={{width: '5%', height: '30%', tintColor: colors.ExtraDarkGrey}}
        />
      ) : null}
    </Pressable>
  );
};

export default WhiteButtonBold;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: Dimensions.get('window').height / 14,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: '5%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
  },
  icon: {
    height: Dimensions.get('window').height / 25,
    width: Dimensions.get('window').width / 25,
    tintColor: colors.ExtraDarkGrey,
    marginRight: '15%',
  },
});
