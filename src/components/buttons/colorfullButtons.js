import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';

const ColorfullButtons = ({backgroundColor, text1, text2}) => {
  return (
    <View style={{...styles.container, backgroundColor: backgroundColor}}>
      {/* eclipse */}
      <Image
        source={require('../../../assets/icons/Ellipse.png')}
        resizeMode={'contain'}
        style={{width: 33, height: 33, position: 'absolute', top: -10, left: 0}}
      />
      {/* text1 */}
      <Text style={styles.text1}>{text1}</Text>
      {/* text2 */}
      <Text style={styles.text2}>{text2}</Text>
    </View>
  );
};

export default ColorfullButtons;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height * 0.11,
    width: '48%',
    borderRadius: 24,
    marginVertical: '2%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontFamily: 'OpenSans-Bold',
    color: 'white',
    fontSize: 24,
    marginBottom: '4%',
    marginTop: '2%',
  },
  text2: {
    fontFamily: 'OpenSans-Regular',
    color: 'white',
    fontSize: 16,
  },
});
