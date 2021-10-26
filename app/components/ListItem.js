import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function ListItem({image, title, subTitle}) {
  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={styles.image}
      ></Image>

      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 10
  },
  title: {
    fontWeight: '500'
  },
  subTitle: {
    color: colors.medium
  }
})

export default ListItem;
