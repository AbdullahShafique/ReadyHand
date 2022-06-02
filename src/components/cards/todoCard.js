import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';

const TodoCard = () => {
  return (
    <View style={styles.card}>
      {/* Todo 1 */}
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.text1}>Go to Laundry at Venas</Text>
          <Image
            source={require('../../../assets/icons/tick_mark.png')}
            resizeMode={'contain'}
            style={{width: 20, height: 20}}
          />
        </View>
        <Text numberOfLines={2}>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Aliquam maximus.
        </Text>
      </View>
      {/* Line */}
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: colors.DarkGrey,
          marginVertical: '5%',
        }}
      />

      {/* Todo 2 */}
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.text1}>Go to Laundry at Venas</Text>
          <Image
            source={require('../../../assets/icons/tick_mark.png')}
            resizeMode={'contain'}
            style={{width: 20, height: 20}}
          />
        </View>
        <Text numberOfLines={2}>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Aliquam maximus.
        </Text>
      </View>
    </View>
  );
};

export default TodoCard;

const styles = StyleSheet.create({
  card: {
    width: '90%',
    // height: Dimensions.get('window').height / 3,
    borderRadius: 17,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginLeft: '5%',

    padding: '5%',
    marginBottom: '5%',
  },
  text1: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Black,
    fontSize: 16,
    marginBottom: '2%',
  },
});
