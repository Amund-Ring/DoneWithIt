import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function ViewImageScreen() {
  return (
    <View style={styles.container}>

      <MaterialCommunityIcons style={styles.closeIcon} name="close" />
      <MaterialCommunityIcons style={styles.deleteIcon} name="trash-can-outline" />


      <Image source={require('../assets/chair.jpg')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.black
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%'
  },
  closeIcon: {
    position: 'absolute',
    top: 40,
    left: 30,
    color: colors.white,
    fontSize: 33
  },
  deleteIcon: {
    position: 'absolute',
    top: 40,
    right: 30,
    color: colors.white,
    fontSize: 33
  }
});

export default ViewImageScreen;