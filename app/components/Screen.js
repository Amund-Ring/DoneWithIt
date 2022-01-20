import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

function Screen({ children, style }) {
  const isOnline = useNetInfo().isInternetReachable;

  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  view: {
    flex: 1
  }
});

export default Screen;
