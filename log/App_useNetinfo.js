import React, { useEffect } from 'react';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Screen from './app/components/Screen';

export default function App() {
  const netInfo = useNetInfo();
  console.log(netInfo.isInternetReachable);

  return (
    <Screen>
      <Text>Hello</Text>
      {netInfo.isInternetReachable ? <Text>Yes</Text> : <Text>No</Text>}
    </Screen>
  );
}
