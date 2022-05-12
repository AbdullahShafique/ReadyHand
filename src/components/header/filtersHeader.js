import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';

const FiltersHeader = ({onPress}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
        <Pressable onPress={onPress} style={{}}>
          <Image
            source={require('../../../assets/icons/cross.png')}
            resizeMode={'contain'}
            style={{
              tintColor: colors.Black,
              width: 10,
              height: 10,
              marginRight: '5%',
            }}
          />
        </Pressable>

        <Text style={styles.text}>Clearing</Text>
      </View>

      <Text style={styles.text2}>Clear</Text>
    </View>
  );
};

export default FiltersHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: Dimensions.get('screen').height / 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
    marginTop: '5%',
    borderColor: colors.Grey,
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Black,
    fontSize: 24,
    marginLeft: '10%',
  },
  text2: {
    fontFamily: 'OpenSans-Regular',
    color: colors.Black,
    fontSize: 16,
  },
});
