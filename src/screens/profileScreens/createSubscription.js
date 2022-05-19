import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import WhiteHeader from '../../components/header/whiteHeader';
import WhiteButton from '../../components/buttons/whiteButton';
import MainInputField from '../../components/inputfields/mainInputField';
import SmallButton from '../../components/buttons/smallButton';

const CreateSubscription = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <WhiteHeader
        text={'Create Subscription'}
        onPress={() => navigation.goBack()}
      />
      <View style={{marginTop: '5%'}}>
        <WhiteButton
          text={'Weekly'}
          Icon={require('../../../assets/icons/downArrow.png')}
        />
      </View>
      {/* Select Service */}
      <MainInputField title={'Select Service'} placeholder="Service" />
      {/* Price */}
      <MainInputField title={'Price'} placeholder="168" />
      {/* Create Subscription */}
      <View style={{marginTop: '10%'}}>
        <SmallButton
          text={'Create Subscription'}
          height={Dimensions.get('window').height / 17}
          width={Dimensions.get('window').width / 1.5}
          onPress={() => console.log('Create Subscription')}
        />
      </View>
    </View>
  );
};

export default CreateSubscription;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
