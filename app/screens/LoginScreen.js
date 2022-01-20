import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Button from '../components/Button';
import TextInput from '../components/TextInput';
import Screen from '../components/Screen';
import ErrorMessage from '../components/forms/ErrorMessage';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password')
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-blue.png')} />

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, touched, setFieldTouched }) => (
          <>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              icon='email'
              placeholder='Email'
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='email-address'
              textContentType='emailAddress'
            />
            <ErrorMessage error={errors.email} visible={touched.email} />
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
              icon='lock'
              placeholder='Password'
              autoCapitalize='none'
              autoCorrect={false}
              textContentType='password'
              secureTextEntry
            />
            <ErrorMessage error={errors.password} visible={touched.password} />
            <Button title='Login' onPress={handleSubmit} />
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
