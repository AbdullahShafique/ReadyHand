import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import FiltersHeader from '../../components/header/filtersHeader';
import WhiteButton from '../../components/buttons/whiteButton';
import InputFieldWithIcon from '../../components/inputfields/inputFieldWithIcon';
import colors from '../../globalStyles/colors';

const Filters = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View style={styles.container}>
        <FiltersHeader onPress={() => navigation.goBack()} />

        {/* Remote */}
        <View style={{marginTop: '5%'}}>
          <WhiteButton
            text={'Remote'}
            Icon={require('../../../assets/icons/downArrow.png')}
          />
        </View>

        {/* Location */}
        <View style={{marginBottom: '2.5%'}}>
          <InputFieldWithIcon
            placeholder={'Location'}
            icon={require('../../../assets/icons/current-location.png')}
            iconSize={20}
          />
        </View>

        {/* Radius */}
        <View style={{marginBottom: '2.5%'}}>
          <WhiteButton text={'Radius'} />
        </View>
        {/* Best service providers */}
        <View style={{marginBottom: '2.5%'}}>
          <WhiteButton
            text={'Best service providers'}
            Icon={require('../../../assets/icons/tick.png')}
          />
        </View>

        {/* New comers  */}
        <WhiteButton text={'New comers'} />
        {/* Hourly Rate */}
        <View style={styles.hourlyRate}>
          <Text style={styles.text}>Hourly Rate</Text>
          <View
            style={{
              width: '50%',
              height: Dimensions.get('window').height / 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={styles.button}>
              <Text style={styles.text2}>£ 10</Text>
            </View>
            <View
              style={{
                height: '100%',
                //width: '30%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.text2}>To</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.text2}>£ 10</Text>
            </View>
          </View>
        </View>
        {/* Service provider’s language */}
        <WhiteButton
          text={'Service provider’s language'}
          Icon={require('../../../assets/icons/rightArrow.png')}
        />
      </View>
    </ScrollView>
  );
};

export default Filters;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  hourlyRate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    marginVertical: '5%',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Black,
    fontSize: 16,
  },
  button: {
    height: '100%',
    width: '40%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text2: {
    fontFamily: 'OpenSans-Regular',
    color: colors.Black,
    fontSize: 16,
  },
});
