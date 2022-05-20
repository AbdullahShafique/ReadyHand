import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import colors from '../../../globalStyles/colors';
import {Slider} from '@miblanchard/react-native-slider';
import SmallButton from '../../../components/buttons/smallButton';

import WhiteHeader from '../../../components/header/whiteHeader';

const Distance = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <WhiteHeader text={'Distance'} onPress={() => navigation.goBack()} />
      {/* Top Text */}
      <Text style={styles.text}>
        choose distance upon which service takers can see your offer. Or the
        distannce in circle upon which you can provide services.
      </Text>
      {/* Distance Slider */}
      <Slider
        containerStyle={{
          width: '90%',
          alignSelf: 'center',
          marginTop: '0%',
        }}
        trackStyle={{backgroundColor: colors.Grey, height: 8}}
        thumbStyle={{backgroundColor: 'white', height: 20, width: 20}}
        renderAboveThumbComponent={() => (
          <View style={{}}>
            <Text>30 miles</Text>
          </View>
        )}
      />
      {/* Save */}
      <View style={{marginTop: '10%'}}>
        <SmallButton
          text={'Save'}
          height={Dimensions.get('window').height / 15}
          width={Dimensions.get('window').width / 2}
          onPress={() => console.log('Save')}
        />
      </View>
    </View>
  );
};

export default Distance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    color: colors.Black,
    fontSize: 16,
    width: '90%',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: '5%',
    marginBottom: '10%',
  },
});
