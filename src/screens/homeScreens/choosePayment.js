import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import RadioButtonRN from 'radio-buttons-react-native';
import WhiteHeader from '../../components/header/whiteHeader';
import BookingCard from '../../components/cards/bookingCard';
import colors from '../../globalStyles/colors';
import SmallButton from '../../components/buttons/smallButton';

const ChoosePayment = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <WhiteHeader
        text={'Choose Payment Method'}
        onPress={() => navigation.goBack()}
      />
      {/* Top Card */}
      <BookingCard
        text={
          'I can clean your house in less time and efficiently. My rate is very affordable and service is very satisfactory.'
        }
      />

      {/* Add Payment Mathod */}
      <Text style={styles.text1}>Add Payment Mathod</Text>
      {/* Credit or Debit Card */}
      <View style={styles.button}>
        <RadioButtonRN
          data={[
            {
              label: '',
            },
          ]}
          selectedBtn={e => console.log(e)}
          circleSize={12}
          box={false}
          activeColor={colors.Green}
          deactiveColor={colors.Green}
          style={{}}
        />
        <Image
          source={require('../../../assets/icons/creditCard.png')}
          resizeMode={'contain'}
          style={{
            width: '10%',
            height: '80%',
            marginHorizontal: '5%',
          }}
        />
        <Text style={styles.text2}>Credit or Debit Card</Text>
      </View>
      {/* Paypal */}
      <View style={styles.button}>
        <RadioButtonRN
          data={[
            {
              label: '',
            },
          ]}
          selectedBtn={e => console.log(e)}
          circleSize={12}
          box={false}
          activeColor={colors.Green}
          deactiveColor={colors.Green}
          style={{}}
        />
        <Image
          source={require('../../../assets/icons/paypal.png')}
          resizeMode={'contain'}
          style={{width: '10%', height: '80%', marginHorizontal: '5%'}}
        />
        <Text style={styles.text2}>Paypal</Text>
      </View>
      {/* Google Pay */}
      <View style={styles.button}>
        <RadioButtonRN
          data={[
            {
              label: '',
            },
          ]}
          selectedBtn={e => console.log(e)}
          circleSize={12}
          box={false}
          activeColor={colors.Green}
          deactiveColor={colors.Green}
          style={{}}
        />
        <Image
          source={require('../../../assets/icons/googlePay.png')}
          resizeMode={'contain'}
          style={{width: '10%', height: '80%', marginHorizontal: '5%'}}
        />
        <Text style={styles.text2}>Google Pay</Text>
      </View>
      {/* Bottom Button */}
      <View style={{marginTop: '10%'}}>
        <SmallButton
          text={'Review Payment Method'}
          width={'70%'}
          height={Dimensions.get('window').height / 15}
          onPress={() => navigation.navigate('TrackOrder')}
        />
      </View>
    </View>
  );
};

export default ChoosePayment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text1: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Black,
    fontSize: 16,
    marginLeft: '5%',
    marginVertical: '2.5%',
  },
  text2: {
    fontFamily: 'OpenSans-Regular',
    color: colors.Black,
    fontSize: 16,
    marginLeft: '5%',
    marginVertical: '2.5%',
    width: '60%',
  },
  button: {
    flexDirection: 'row',
    paddingLeft: '7.5%',
    width: '100%',
    alignItems: 'center',
    marginBottom: '2.5%',
  },
});
