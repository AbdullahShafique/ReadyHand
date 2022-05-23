import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import WhiteHeader from '../../components/header/whiteHeader';
import MainInputField from '../../components/inputfields/mainInputField';
import SmallButton from '../../components/buttons/smallButton';
import colors from '../../globalStyles/colors';

const Support = ({navigation}) => {
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <WhiteHeader
        text={'Support'}
        onPress={() => navigation.goBack()}
        bigFonts={true}
      />
      {/* Top Image */}
      <Image
        source={require('../../../assets/icons/supportTopImage.png')}
        resizeMode={'contain'}
        style={styles.topImage}
      />
      {/* How we can help you? */}
      <Text style={styles.text1}>How we can help you?</Text>
      {/* Please write message to support team */}
      <Text style={styles.text2}>Please write message to support team</Text>
      <Formik initialValues={{Title: '', Description: ''}}>
        {formikProps => (
          <View style={{flex: 1}}>
            <View style={{marginBottom: '5%'}}>
              <MainInputField placeholder={'Title'} />
            </View>
            <View style={{marginBottom: '5%'}}>
              <MainInputField
                placeholder={'Description'}
                Height={5}
                MarginTop={'0%'}
                multiline={true}
              />
            </View>
            <View style={{marginTop: '5%'}}>
              <SmallButton
                text={'Send'}
                width={'50%'}
                height={Dimensions.get('window').height / 15}
              />
            </View>
          </View>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

export default Support;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topImage: {
    width: '50%',
    height: Dimensions.get('window').height / 4,
    alignSelf: 'center',
    marginTop: '5%',
  },
  text1: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Black,
    fontSize: 20,
    alignSelf: 'center',
    marginTop: '5%',
  },
  text2: {
    fontFamily: 'OpenSans-Regular',
    color: colors.DarkGrey,
    fontSize: 12,
    alignSelf: 'center',
  },
});
