import React, { useState } from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

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

export default function App() {
  
  
  const [firstName, setFirstName] = useState('');
  const [isNew, setIsNew] = useState(false);
  const [category, setCategory] = useState(categories[0]);
  
  return (

    // <WelcomeScreen />

    // <ListingsScreen />

    // <MessagesScreen />

    // <Screen>
    //   <Text>{firstName}</Text>

    //   <AppPicker
    //     selectedItem={category}
    //     onSelectItem={item => setCategory(item)}
    //     items={categories}
    //     icon='apps'
    //     placeholder={category}
    //     />

    //   <Switch value={isNew} onValueChange={newValue => setIsNew(newValue)} />
    // </Screen>

    // <LoginScreen />

    // <RegisterScreen />


    <ListingEditScreen />

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
