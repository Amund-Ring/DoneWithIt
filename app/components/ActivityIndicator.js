import React from 'react';
import LottieView from 'lottie-react-native';
import { View } from 'react-native';

function ActivityIndicator({ visible = false, style }) {
  if (!visible) return null;

  return (
    <View style={style}>
      <LottieView
        source={require('../assets/animations/loader.json')}
        autoPlay
        loop
      />
    </View>
  );
}

export default ActivityIndicator;
