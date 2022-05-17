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

const WhiteButton = ({
  text,
  Icon,
  text2,
  BigIcon,
  messages,
  text4,
  onPress,
  red,
}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={{...styles.text, color: red ? 'red' : colors.Black}}>
        {text}
      </Text>
      {Icon ? (
        <Image
          source={Icon}
          resizeMode={'contain'}
          style={{
            width: BigIcon ? '8%' : '5%',
            height: BigIcon ? '50%' : '30%',
          }}
        />
      ) : null}
      {text2 ? <Text style={styles.text2}>{text2}</Text> : null}
      {text4 ? <Text style={styles.text4}>{text4}</Text> : null}
      {messages ? (
        <View style={styles.messagesButton}>
          <Text style={styles.text3}>{messages}</Text>
        </View>
      ) : null}
    </Pressable>
  );
};

export default WhiteButton;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: Dimensions.get('window').height / 14,
    borderRadius: 10,
    alignSelf: 'center',
    //marginTop: '5%',
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
    fontFamily: 'OpenSans-Regular',

    fontSize: 16,
  },
  text2: {
    fontFamily: 'OpenSans-Bold',

    color: colors.Black,
    fontSize: 16,
  },
  text3: {
    fontFamily: 'OpenSans-Bold',
    color: 'white',
    fontSize: 16,
  },
  text4: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Green,
    fontSize: 16,
  },
  messagesButton: {
    backgroundColor: colors.Green,
    height: Dimensions.get('window').height / 23,
    width: Dimensions.get('window').height / 23,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 33 / 2,
  },
});
