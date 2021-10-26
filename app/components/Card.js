import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

function Card({title, subTitle, image}) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      {/* <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subTitle}</Text> */}
      <View style={styles.detailsContainer}>
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.subTitle}>{subTitle}</AppText>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: colors.white,
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200
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
})

export default Card;