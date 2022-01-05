import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Switch, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';

import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import IosFonts from './app/screens/IosFonts';
import AppText from './app/components/Text';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import Screen from './app/components/Screen';
import TextInput from './app/components/TextInput';
import Picker from './app/components/Picker';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import Button from './app/components/Button';

export default function App() {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert('You need to enable permission to access the library.');
    }
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setImageUri(result.uri);
        console.log(imageUri);
      }
    } catch (error) {
      console.log('Error reading an image', error);
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <Screen style={{ padding: 50 }}>
      <Button onPress={selectImage}>Select Image</Button>
      <Image
        source={{ uri: imageUri }}
        style={{ width: 200, height: 200, alignSelf: 'center', marginTop: 20 }}
      />
    </Screen>
  );
}

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Cameras', value: 3 }
];

const styles = StyleSheet.create({
  container: {
    flex: 1
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

// const [firstName, setFirstName] = useState('');
// const [isNew, setIsNew] = useState(false);
// const [category, setCategory] = useState(categories[0]);

// <WelcomeScreen />

// <LoginScreen />

// <ListingsScreen />

// <MessagesScreen />

// <AccountScreen />

// <RegisterScreen />

// <ListingDetailsScreen />

// <ListingEditScreen />

// <ViewImageScreen />
