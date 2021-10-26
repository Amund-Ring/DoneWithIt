import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

function AppButton({ children, color = 'primary', onPress }) {

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      activeOpacity={0.6}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10
  },
  text: {
    color: colors.white,
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default AppButton;
