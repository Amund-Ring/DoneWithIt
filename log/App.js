import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import IosFonts from './app/screens/IosFonts';
import AppText from './app/components/AppText';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <WelcomeScreen /> */}

      {/* <ViewImageScreen /> */}

      {/* <View style={styles.cardArea}>
        <Card title='Red jacket for sale!' subTitle='$100' image={require('./app/assets/jacket.jpg')}/>
      </View> */}

      {/* <ListingDetailsScreen /> */}

      {/* <MessagesScreen /> */}

      {/* <AccountScreen /> */}

      <ListingsScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f8f4f4',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  cardArea: {
    // backgroundColor: '#f8f4f4',
    backgroundColor: '#fadfea',
    alignItems: 'center',
    padding: 20,
    paddingTop: 100
  }
});
