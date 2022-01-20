import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';

import LoginScreen from './app/screens/LoginScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import OfflineNotice from './app/components/OfflineNotice';

export default function App() {
  return (

    <WelcomeScreen />
    // <LoginScreen />

    // <>
    // <OfflineNotice />
    // <NavigationContainer theme={navigationTheme}>
    //   <AppNavigator />
    // </NavigationContainer>
    // </>

  );
}
