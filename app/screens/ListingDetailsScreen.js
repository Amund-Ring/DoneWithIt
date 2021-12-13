import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import colors from '../config/colors';
import AppText from '../components/AppText';
import ListItem from '../components/lists/ListItem';

function ListingDetailsScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/jacket.jpg')} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>

        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/amund.jpeg')}
            title="Amund Ring"
            subTitle="5 listings"
          ></ListItem>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.white
  },
  userContainer: {
    marginVertical: 40
  },
  image: {
    width: '100%',
    height: 300
  },
  detailsContainer: {
    padding: 20
  },
  title: {
    fontWeight: '500',
    fontSize: 24
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10
  }
});

export default ListingDetailsScreen;
