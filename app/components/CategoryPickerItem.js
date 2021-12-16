import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from './Text';
import Icon from './Icon';

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    marginTop: 20,
  },
  label: {
    marginTop: 5
  }
});

export default CategoryPickerItem;
