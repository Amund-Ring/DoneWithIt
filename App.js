import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Screen from './app/components/Screen';

export default function App() {
  const demo = async () => {
    try {
      const jsonValue = JSON.stringify({ id: 1 });
      await AsyncStorage.setItem('person', jsonValue);

      const value = await AsyncStorage.getItem('person');
      const person = JSON.parse(value);
      console.log(person);
    } catch (error) {
      console.log(error);
    }
  };

  demo();

  return (
    <Screen>
      <Text>Hello</Text>
    </Screen>
  );
}
