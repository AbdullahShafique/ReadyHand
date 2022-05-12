import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import WhiteHeader from '../../components/header/whiteHeader';
import colors from '../../globalStyles/colors';
import WhiteButton from '../../components/buttons/whiteButton';
import SmallButton from '../../components/buttons/smallButton';
import ReviewCard from '../../components/cards/reviewCard';
const SelectServices = ({navigation}) => {
  return (
    <View style={styles.container}>
      <WhiteHeader onPress={() => navigation.goBack()} />
      {/* top Text */}
      {/* <ScrollView showsVerticalScrollIndicator={true}> */}

      {/* Vertical Reviews */}
      <FlatList
        ListHeaderComponent={
          <View>
            <Text style={styles.text1}>
              I can clean you house very quickly.
            </Text>
            {/* Image */}
            <ImageBackground
              style={styles.image}
              resizeMode={'contain'}
              source={require('../../../assets/images/p4.png')}>
              <View
                style={{
                  backgroundColor: 100,
                  width: '15%',
                  height: '10%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 9,
                  marginBottom: '5%',
                }}>
                <Text style={styles.text2}>1/3</Text>
              </View>
            </ImageBackground>

            {/* Location */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: '2.5%',
              }}>
              <Image
                source={require('../../../assets/icons/location.png')}
                resizeMode={'contain'}
                style={{
                  width: '5%',
                  height: '80%',
                  marginLeft: '5%',
                  marginRight: '2.5%',
                }}
              />
              <Text style={styles.text3}>
                80611, Houston Street, United Kingdom
              </Text>
            </View>
            {/* Description */}
            <View
              style={{width: '90%', alignSelf: 'center', marginTop: '2.5%'}}>
              <Text style={styles.text4}>
                I can clean your house in less time and efficiently. My rate is
                very affordable and service is very satisfactory.
              </Text>
            </View>
            {/* Hourly Rate */}
            <WhiteButton text={'Hourly Rate'} text2={'£ 8.0/Hr'} />
            {/* Profile */}
            <View
              style={{
                width: '90%',
                height: Dimensions.get('window').height / 8,
                alignSelf: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              {/*Profile Image  */}
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <ImageBackground
                  source={require('../../../assets/images/p5.png')}
                  resizeMode={'contain'}
                  style={{
                    width: Dimensions.get('window').height / 14,
                    height: Dimensions.get('window').height / 14,
                  }}
                  imageStyle={{
                    borderRadius: 120 / 2,
                    backgroundColor: 100,
                  }}>
                  <View style={styles.online}></View>
                </ImageBackground>
                {/* Name */}
                <Text style={styles.text5}>Zeeshan Ali</Text>
              </View>

              {/* Down Arrow */}
              <Image
                source={require('../../../assets/icons/downArrow.png')}
                resizeMode={'contain'}
                style={{width: '5%', height: '80%'}}
              />
            </View>
            {/* Reviews */}
            <Text style={styles.text5}>12 Reviews</Text>
          </View>
        }
        data={[1, 2, 3, 4]}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item}
        renderItem={() => <ReviewCard />}
        ListFooterComponent={
          <View style={{marginBottom: '10%'}}>
            <SmallButton
              text={'Continue'}
              width={'50%'}
              height={Dimensions.get('window').height / 15}
              onPress={() => navigation.navigate('ChoosePayment')}
            />
          </View>
        }
      />
    </View>
  );
};

export default SelectServices;

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
  image: {
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 3.3,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  text2: {
    fontFamily: 'OpenSans-Regular',
    color: 'white',
    fontSize: 10,
  },
  text3: {
    fontFamily: 'OpenSans-Regular',
    color: '#4285F4',
    fontSize: 16,
  },
  text4: {
    fontFamily: 'OpenSans-Regular',
    color: colors.Black,
    fontSize: 14,
  },
  online: {
    width: 9,
    height: 9,
    position: 'absolute',
    bottom: 3,
    right: 3,
    backgroundColor: '#249F46',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  text5: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Black,
    fontSize: 16,
    marginLeft: '5%',
  },
});
