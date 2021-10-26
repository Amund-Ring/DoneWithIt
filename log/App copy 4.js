import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fbd6f5',
        flex: 1
      }}
    >
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: 100,
          height: 100
        }}
      ></View>
      <View
        style={{
          backgroundColor: 'gold',
          width: 100,
          height: 100,
          position: 'relative',
          top: 20,
          left: 20
        }}
      ></View>
      <View
        style={{ backgroundColor: 'tomato', width: 100, height: 100 }}
      ></View>
    </View>
  );
}
