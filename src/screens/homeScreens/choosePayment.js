import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RadioButtonRN from 'radio-buttons-react-native';

import WhiteHeader from '../../components/header/whiteHeader';
import BookingCard from '../../components/cards/bookingCard';
import colors from '../../globalStyles/colors';

const ChoosePayment = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <WhiteHeader text={'Choose Payment Method'} />
      {/* Top Card */}
      <BookingCard />
      <RadioButtonRN
        data={[
          {
            label: '',
          },
        ]}
        selectedBtn={e => console.log(e)}
        circleSize={16}
        box={false}
      />
      <RadioButtonRN
        data={[
          {
            label: '',
          },
        ]}
        selectedBtn={e => console.log(e)}
        circleSize={16}
        box={false}
      />
      <RadioButtonRN
        data={[
          {
            label: '',
          },
        ]}
        selectedBtn={e => console.log(e)}
        circleSize={16}
        box={false}
      />
    </View>
  );
};

export default ChoosePayment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
