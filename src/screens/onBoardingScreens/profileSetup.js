import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import React, {useContext} from 'react';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MainInputField from '../../components/inputfields/mainInputField';
import MainButton from '../../components/buttons/mainButton';
import MainHeader from '../../components/header/mainHeader';
import DoubleInputField from '../../components/inputfields/doubleInputField';
import InputFieldWithIcon from '../../components/inputfields/inputFieldWithIcon';
import {AuthContext} from '../../Authentication/authProvider';

const ProfileSetup = ({navigation}) => {
  const {userType} = useContext(AuthContext);
  return (
    <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>
      <View style={styles.container}>
        {/*Header  */}
        <MainHeader
          text={'Profile Setup'}
          onPress={() => navigation.goBack()}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          {/*Profile Image  */}
          <ImageBackground
            source={require('../../../assets/images/user_profile.jpg')}
            resizeMode={'contain'}
            style={{width: 120, height: 120, alignSelf: 'center'}}
            imageStyle={{
              borderRadius: 120 / 2,
              backgroundColor: 100,
            }}>
            <Image
              source={require('../../../assets/icons/pencil.png')}
              resizeMode={'contain'}
              style={styles.pencil}
            />
          </ImageBackground>
          {/* Form */}
          <Formik
            initialValues={{
              firstName: '',
              age: '',
              gender: '',
              startTime: '',
              endTime: '',
              rate: '',
              address: '',
              language: '',
            }}
            onSubmit={values => {
              navigation.navigate('ChooseServices');
              console.log('values:', values);
            }}>
            {formikProps => (
              <View style={{flex: 1}}>
                {/* First Name */}

                <MainInputField
                  title={'First Name'}
                  placeholder={'Enter your full name'}
                  value={formikProps.values.firstName}
                  onChangeText={formikProps.handleChange('firstName')}
                  ShowPassword={true}
                  onBlur={formikProps.handleBlur('firstName')}
                  eye={false}
                />

                {/* Age */}

                <MainInputField
                  title={'Age'}
                  placeholder={'Select age'}
                  value={formikProps.values.age}
                  onChangeText={formikProps.handleChange('age')}
                  ShowPassword={true}
                  onBlur={formikProps.handleBlur('age')}
                  eye={false}
                  keyboardType={'numeric'}
                />

                {/* Gender */}

                <MainInputField
                  title={'Gender*'}
                  placeholder={'Select gender'}
                  value={formikProps.values.gender}
                  onChangeText={formikProps.handleChange('gender')}
                  ShowPassword={true}
                  onBlur={formikProps.handleBlur('gender')}
                  eye={false}
                />

                {/* Working Time */}

                {userType == 'serviceProvider' ? (
                  <DoubleInputField
                    title={'Working Time'}
                    value1={formikProps.values.startTime}
                    value2={formikProps.values.endTime}
                    onChangeText1={formikProps.handleChange('startTime')}
                    onChangeText2={formikProps.handleChange('endTime')}
                    ShowPassword={true}
                    onBlur1={formikProps.handleBlur('startTime')}
                    onBlur2={formikProps.handleBlur('endTime')}
                    eye={false}
                  />
                ) : null}
                {/* Rate/Hr */}

                {userType == 'serviceProvider' ? (
                  <InputFieldWithIcon
                    title={'Rate/Hr'}
                    placeholder={'0.00'}
                    value={formikProps.values.rate}
                    onChangeText={formikProps.handleChange('rate')}
                    ShowPassword={true}
                    onBlur={formikProps.handleBlur('rate')}
                    icon={require('../../../assets/icons/£.png')}
                    keyboardType={'numeric'}
                    iconSize={13}
                  />
                ) : null}
                {/* Address  */}

                <InputFieldWithIcon
                  title={'Address'}
                  placeholder={'Enter address'}
                  value={formikProps.values.address}
                  onChangeText={formikProps.handleChange('address')}
                  ShowPassword={true}
                  onBlur={formikProps.handleBlur('address')}
                  icon={require('../../../assets/icons/current-location.png')}
                  iconSize={20}
                />
                {/* Language */}

                {userType == 'serviceTaker' ? (
                  <MainInputField
                    title={'Language'}
                    placeholder={'English'}
                    value={formikProps.values.language}
                    onChangeText={formikProps.handleChange('language')}
                    ShowPassword={true}
                    onBlur={formikProps.handleBlur('language')}
                    eye={false}
                  />
                ) : null}

                {/* Submit Profile */}
                <View style={{marginVertical: '10%'}}>
                  <MainButton
                    text={'Submit Profile'}
                    onPress={() => formikProps.handleSubmit()}
                  />
                </View>
              </View>
            )}
          </Formik>
        </ScrollView>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ProfileSetup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  pencil: {
    width: 30,
    height: 30,
    position: 'absolute',
    bottom: 3,
    right: 3,
  },
});
