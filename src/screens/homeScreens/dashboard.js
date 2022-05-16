import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import colors from '../../globalStyles/colors';
import WhiteHeader from '../../components/header/whiteHeader';
import WhiteButton from '../../components/buttons/whiteButton';
import DoubleWhiteButtons from '../../components/buttons/doubleWhiteButtons';

// This is Heading For eact Section
const SectionHeader = ({Icon, hText}) => (
  <View
    style={{
      flexDirection: 'row',
      width: '90%',
      alignSelf: 'center',
      height: Dimensions.get('screen').height / 15,
      alignItems: 'center',
    }}>
    <Image
      source={Icon}
      resizeMode={'contain'}
      style={{width: '8%', height: '100%'}}
    />

    <Text style={styles.text1}>{hText}</Text>
  </View>
);
const Dashboard = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <WhiteHeader
        icon={require('../../../assets/images/user_profile.jpg')}
        onPress={() => navigation.goBack()}
        text3={'Username'}
      />
      <View style={{marginTop: '5%'}}>
        <WhiteButton
          text={'Street 123, United kingdom'}
          Icon={require('../../../assets/icons/current-location.png')}
          BigIcon={true}
        />
      </View>

      {/* To-Dos */}
      <SectionHeader
        hText={'To-Dos'}
        Icon={require('../../../assets/icons/todo.png')}
      />
      {/*  Unread Messages */}
      <WhiteButton text={'5 Unread Messages'} messages={5} />
      {/* Earnings */}
      <SectionHeader
        hText={'Earnings'}
        Icon={require('../../../assets/icons/earning.png')}
      />
      {/* Double White Button */}
      <DoubleWhiteButtons />
      {/* Services */}
      <SectionHeader
        hText={'Services'}
        Icon={require('../../../assets/icons/earning.png')}
      />
      <View style={{marginBottom: '5%'}}>
        <WhiteButton text={'Active Services'} text4={'05'} />
      </View>
      <WhiteButton text={'Completed Services'} text4={'05'} />
    </View>
  );
};

export default Dashboard;

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
  },
});
