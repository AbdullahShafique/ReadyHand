import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useContext} from 'react';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import colors from '../../globalStyles/colors';
import MainHeader from '../../components/header/mainHeader';
import MainInputField from '../../components/inputfields/mainInputField';
import MainButton from '../../components/buttons/mainButton';
import {AuthContext} from '../../Authentication/authProvider';

const Signup = ({navigation}) => {
  const {signup} = useContext(AuthContext);
  return (
    <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>
      <View style={styles.container}>
        <MainHeader text={'Sign Up'} onPress={() => navigation.goBack()} />

        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
            ShowPassword: false,
            confirmShowPassword: false,
          }}
          onSubmit={values => {
            signup();
            console.log('Values:', values);
          }}>
          {formikProps => (
            <View style={{flex: 1}}>
              {/*Top Text  */}
              <View style={{marginTop: '2%', marginBottom: '5%'}}>
                <Text style={styles.text1}>Join ReadyHands</Text>
                <Text style={styles.text2}>
                  Be a part of service providers community
                </Text>
              </View>

              {/* Email */}

              <MainInputField
                title={'Username or Email'}
                placeholder={'Enter username or email'}
                value={formikProps.values.email}
                onChangeText={formikProps.handleChange('email')}
                ShowPassword={true}
                autoCapitalize="none"
                onBlur={formikProps.handleBlur('email')}
                eye={false}
              />
              {/* Password */}

              <MainInputField
                title={'Password'}
                placeholder={'Enter Password'}
                value={formikProps.values.password}
                onChangeText={formikProps.handleChange('password')}
                ShowPassword={formikProps.values.ShowPassword}
                autoCapitalize="none"
                onBlur={formikProps.handleBlur('password')}
                eye={true}
                onEyePress={() =>
                  formikProps.setFieldValue(
                    'ShowPassword',
                    !formikProps.values.ShowPassword,
                  )
                }
              />

              {/* Confirm Password */}

              <MainInputField
                title={'Confirm Password'}
                placeholder={'Re-enter Password'}
                value={formikProps.values.confirmPassword}
                onChangeText={formikProps.handleChange('confirmPassword')}
                ShowPassword={formikProps.values.confirmShowPassword}
                autoCapitalize="none"
                onBlur={formikProps.handleBlur('confirmPassword')}
                eye={true}
                onEyePress={() =>
                  formikProps.setFieldValue(
                    'confirmShowPassword',
                    !formikProps.values.confirmShowPassword,
                  )
                }
              />

              {/* Sign in Button */}
              <View style={{marginTop: '10%'}}>
                <MainButton
                  text={'Sign Up'}
                  onPress={() => formikProps.handleSubmit()}
                />
              </View>

              {/*Bottom Text  */}
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  position: 'absolute',
                  bottom: '5%',
                }}>
                <Text style={styles.text4}>Already have an account? </Text>

                <Pressable onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.text5}>Sign In</Text>
                </Pressable>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text1: {
    fontFamily: 'OpenSans-ExtraBold',
    color: colors.Green,
    fontSize: 24,
    marginLeft: '5%',
  },
  text2: {
    fontFamily: 'OpenSans-Regular',
    color: colors.Black,
    fontSize: 16,
    marginLeft: '5%',
  },
  forgetPasswordText: {
    fontFamily: 'OpenSans-Bold',
    color: colors.Green,
    fontSize: 16,
    textAlign: 'right',
    marginRight: '7%',
    marginTop: '1%',
    marginBottom: '10%',
  },

  text4: {
    fontFamily: 'OpenSans-Regular',
    color: colors.DarkGrey,
    fontSize: 16,
  },
  text5: {
    fontFamily: 'OpenSans-ExtraBold',
    color: colors.Green,
    fontSize: 16,
  },
});
