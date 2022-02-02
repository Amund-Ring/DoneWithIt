import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Image } from 'react-native-expo-image-cache';

import colors from '../config/colors';
import AppText from './Text';

function Card({ title, subTitle, imageUrl, onPress, thumbnailUrl }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          uri={imageUrl}
          preview={{ uri: thumbnailUrl }}
          style={styles.image}
          tint='light'
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: colors.white,
    marginBottom: 20,
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  detailsContainer: {
    padding: 20
  },
  title: {
    marginBottom: 7,
    fontWeight: '500'
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold'
  }
});

export default Card;
