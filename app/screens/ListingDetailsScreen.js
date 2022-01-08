import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import colors from '../config/colors';
import AppText from '../components/Text';
import ListItem from '../components/lists/ListItem';

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  
  return (
    <View style={styles.container}>
      <Image source={listing.image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>

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
