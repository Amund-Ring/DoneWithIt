import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Switch, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';

import Screen from '../app/components/Screen';
import ImageInputList from '../app/components/ImageInputList';

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = uri => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = uri => {
    setImageUris(imageUris.filter(imageUri => imageUri !== uri));
  };

  return (
    <Screen>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
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
