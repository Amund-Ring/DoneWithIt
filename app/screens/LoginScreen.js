import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              onChangeText={handleChange('email')}
              icon='email'
              placeholder='Email'
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='email-address'
              textContentType='emailAddress'
            />
            <AppTextInput
              onChangeText={handleChange('password')}
              icon='lock'
              placeholder='Password'
              autoCapitalize='none'
              autoCorrect={false}
              textContentType='password'
              secureTextEntry
            />
            <AppButton onPress={handleSubmit}>Login</AppButton>
          </>
        )}
      </Formik>
    </Screen>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20
  }
});
