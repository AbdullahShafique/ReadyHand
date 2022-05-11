import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';

const UploadButton = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.button}>
        {/* Upload Icon */}
        <Image
          source={require('../../../assets/icons/upload.png')}
          resizeMode={'contain'}
          style={{
            // backgroundColor: 100,
            width: '12%',
            height: '80%',
            position: 'absolute',
            left: '15%',
          }}
        />
        <Text style={styles.text}>Upload</Text>
      </View>
    </View>
  );
};

export default UploadButton;

const styles = StyleSheet.create({
  container: {marginTop: '5%'},
  title: {
    fontFamily: 'OpenSans-Bold',
    color: colors.DarkGrey,
    fontSize: 16,
    marginLeft: '7%',
    marginBottom: '2%',
  },
  button: {
    backgroundColor: colors.Grey,
    width: '55%',
    height: Dimensions.get('window').height / 15,
    borderRadius: 16,
    paddingHorizontal: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    color: colors.DarkGrey,
    fontSize: 16,
  },
});
