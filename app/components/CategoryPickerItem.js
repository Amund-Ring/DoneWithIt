import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './Text';
import Icon from './Icon';
import { TouchableOpacity } from 'react-native-gesture-handler';

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
      </TouchableOpacity>
      <Text style={styles.label}>{item.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    marginTop: 20
  },
  label: {
    marginTop: 5
  }
});

export default CategoryPickerItem;
