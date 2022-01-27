import React from 'react';
import LottieView from 'lottie-react-native';
import { StyleSheet, View } from 'react-native';

function ActivityIndicator({ visible = false, style }) {
  if (!visible) return null;

  return (
    <>
      <View style={[styles.overlay]}></View>
      <View style={[style, styles.loading]}>
        <LottieView
          source={require('../assets/animations/loader.json')}
          autoPlay
          loop
          style={{ width: 200 }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    opacity: 0.5
  },
  loading: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1
  }
});

export default ActivityIndicator;
