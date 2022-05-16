import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import WhiteHeader from '../../components/header/whiteHeader';
import MainInputField from '../../components/inputfields/mainInputField';
import SmallButton from '../../components/buttons/smallButton';

const DisputeOrHelp = ({navigation}) => {
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <WhiteHeader text={' Dispute/Help'} onPress={() => navigation.goBack()} />
      {/* Top Image */}
      <Image
        source={require('../../../assets/icons/help.png')}
        resizeMode={'contain'}
        style={styles.topImage}
      />
      <Formik initialValues={{Title: '', Description: ''}}>
        {formikProps => (
          <View style={{flex: 1}}>
            <MainInputField placeholder={'Title'} />
            <MainInputField
              placeholder={'Description'}
              Height={4}
              MarginTop={'0%'}
            />
            <View style={{marginTop: '5%'}}>
              <SmallButton
                text={'Send'}
                width={'70%'}
                height={Dimensions.get('window').height / 15}
              />
            </View>
          </View>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

export default DisputeOrHelp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topImage: {
    width: '50%',
    height: '30%',
    alignSelf: 'center',
    marginTop: '5%',
  },
});
