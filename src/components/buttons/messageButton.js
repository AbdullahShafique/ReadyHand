import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';

const MessageButton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textInput}>
        <TextInput placeholder="Type a message" style={styles.text}></TextInput>
        <Image
          source={require('../../../assets/icons/camera.png')}
          resizeMode={'contain'}
          style={{width: '9%', height: '80%'}}
        />
      </View>
      {/* Send Button */}
      <View style={styles.sendButton}>
        <Image
          source={require('../../../assets/icons/sendArrow.png')}
          resizeMode={'contain'}
          style={{width: '50%', height: '80%'}}
        />
      </View>
    </View>
  );
};

export default MessageButton;

const styles = StyleSheet.create({
  container: {
    marginBottom: '5%',
    width: '90%',
    alignSelf: 'center',
    height: Dimensions.get('window').height / 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    width: '85%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 17,
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  sendButton: {
    height: '100%',
    width: '13%',
    backgroundColor: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 17,
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    color: colors.Black,
    fontSize: 14,
    width: '80%',
  },
});
