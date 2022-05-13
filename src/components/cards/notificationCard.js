import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';

const NotificationCard = ({text}) => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source={require('../../../assets/icons/envelope.png')}
        resizeMode={'contain'}
        style={{width: '7%', height: '50%'}}
      />
      <Text style={styles.text} numberOfLines={2}>
        {text}
      </Text>
    </View>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 100,
    width: '90%',
    height: Dimensions.get('window').height / 10,
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderColor: colors.DarkGrey,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    color: colors.Black,
    fontSize: 14,
    marginLeft: '10%',

    width: '80%',
  },
});
