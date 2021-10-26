// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, StatusBar, Dimensions  } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {

  
  
  // console.log('Dimensions:',Dimensions.get('window'));
  // console.log('useDimensions:', useDimensions());
  // console.log('useDeviceOrientation:', useDeviceOrientation());

  const {landscape, portrait} = useDeviceOrientation();
  console.log('Landscape:', landscape);
  console.log('Portrait:', portrait);

  
  return <SafeAreaView style={styles.container}>
    <View style={{
      backgroundColor: 'dodgerblue',
      width: '100%',
      height: landscape ? '100%' : '30%'
    }}></View>
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  text: {
    // fontSize: 18
  } 
});
