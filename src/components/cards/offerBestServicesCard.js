import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import SmallButton from '../buttons/smallButton';

const OfferBestServicesCard = ({onPress}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text1}>Offer Best Services</Text>
        <Text style={styles.text2}>Lorem ipsum dor sit met ato</Text>
      </View>

      <View style={{alignSelf: 'flex-end', marginTop: '2%'}}>
        <SmallButton
          text={'Add a Service'}
          height={Dimensions.get('window').height / 17}
          width={Dimensions.get('window').width / 3}
          onPress={onPress}
          radius={20}
        />
      </View>
    </View>
  );
};

export default OfferBestServicesCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#272727',
    width: '90%',
    height: Dimensions.get('window').height / 5.5,
    alignSelf: 'center',
    borderRadius: 17,
    padding: '5%',
    marginBottom: '5%',
    justifyContent: 'space-between',
  },
  text1: {
    fontFamily: 'OpenSans-Bold',
    color: 'white',
    fontSize: 16,
  },
  text2: {
    fontFamily: 'OpenSans-Regular',
    color: 'white',
    fontSize: 13,
  },
});
