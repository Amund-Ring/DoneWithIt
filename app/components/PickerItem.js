import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AppText from './AppText';

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.text} onPress={onPress}>
      <AppText>{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20
  }
})

export default PickerItem;
