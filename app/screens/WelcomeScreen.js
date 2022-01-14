import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

// import colors from '../config/colors';
import Button from '../components/Button';
import routes from '../navigation/routes';

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.image}
      blurRadius={8}
    >
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo-red.png')} style={styles.logo} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title='Login' color='login' onPress={() => navigation.navigate(routes.LOGIN)} />
        <Button
          title='Register'
          color='secondary'
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20
  },
  logoContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 75
  },
  logo: {
    width: 100,
    height: 100
  },
  tagline: {
    paddingVertical: 20,
    fontSize: 22,
    fontWeight: '600'
  },
  buttonContainer: {
    width: '100%',
    padding: 20
  }
});

export default WelcomeScreen;
