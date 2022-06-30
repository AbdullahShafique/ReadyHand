import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';
import SmallButton from './smallButton';

const WhiteDropdownButton = ({
  text,
  Icon,
  text2,
  BigIcon,
  messages,
  text4,
  onPress,
  open,
  onPress2,
}) => {
  return (
    <Pressable
      style={{
        ...styles.container,
        height: open
          ? Dimensions.get('window').height / 4
          : Dimensions.get('window').height / 14,
      }}
      onPress={onPress}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{...styles.text, color: colors.Black}}>{text}</Text>
        {Icon ? (
          <Image
            source={Icon}
            resizeMode={'contain'}
            style={{
              width: Dimensions.get('window').width * 0.04,
              height: Dimensions.get('window').height * 0.03,
            }}
          />
        ) : null}
      </View>

      {open ? (
        <View style={{marginTop: '3%'}}>
          <Text style={styles.text2}>£ 8.0/Hr</Text>
          <Text style={styles.text3}>Weekly</Text>
        </View>
      ) : null}

      {open ? (
        <View style={{marginVertical: '2%'}}>
          <SmallButton
            text={'Subscribe'}
            height={Dimensions.get('window').height / 17}
            width={Dimensions.get('window').width / 2}
            onPress={onPress2}
            radius={16}
          />
        </View>
      ) : null}
    </Pressable>
  );
};

export default WhiteDropdownButton;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: '5%',
    paddingTop: '4%',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
  },
  text2: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Black,
    fontSize: 16,
    alignSelf: 'center',
  },
  text3: {
    fontFamily: 'OpenSans-Regular',
    color: colors.Black,
    fontSize: 16,
    alignSelf: 'center',
  },
});
