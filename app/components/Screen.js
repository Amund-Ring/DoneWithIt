import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

function Screen({ children }) {
  return <SafeAreaView>{children}</SafeAreaView>;
}

export default Screen;
