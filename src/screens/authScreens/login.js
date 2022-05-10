import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useContext} from 'react';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import colors from '../../globalStyles/colors';
import MainHeader from '../../components/header/mainHeader';
import MainInputField from '../../components/inputfields/mainInputField';
import MainButton from '../../components/buttons/mainButton';
import {AuthContext} from '../../Authentication/authProvider';

const Login = ({navigation}) => {
  const {login} = useContext(AuthContext);
  return (
    <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>
      <View style={styles.container}>
        <MainHeader text={'Sign In'} onPress={() => navigation.goBack()} />

        <Formik
          initialValues={{email: '', password: '', ShowPassword: false}}
          onSubmit={values => {
            login();
            console.log('Values:', values);
          }}>
          {formikProps => (
            <View style={{flex: 1}}>
              {/*Top Text  */}
              <View style={{marginTop: '2%', marginBottom: '5%'}}>
                <Text style={styles.text1}>Welcome Back</Text>
                <Text style={styles.text2}>
                  Hello there, sign in to continue
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
              {/*Forget Password  */}

              <Text style={styles.forgetPasswordText}>Forget Password?</Text>

              {/* Sign in Button */}
              <MainButton
                text={'Sign In'}
                onPress={() => formikProps.handleSubmit()}
              />

              {/*Bottom Text  */}
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  position: 'absolute',
                  bottom: '5%',
                }}>
                <Text style={styles.text4}>Already have an account? </Text>

                <Pressable onPress={() => navigation.navigate('Signup')}>
                  <Text style={styles.text5}>Sign Up</Text>
                </Pressable>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;

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
