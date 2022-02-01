import React from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard
} from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import colors from '../config/colors';
import AppText from '../components/Text';
import ListItem from '../components/lists/ListItem';
import ContactSellerForm from '../components/ContactSellerForm';

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Image
          uri={listing.images[0].url}
          preview={{ uri: listing.images[0].thumbnailUrl }}
          style={styles.image}
          tint='light'
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{listing.title}</AppText>
          <AppText style={styles.price}>${listing.price}</AppText>
          <View>
            <ListItem
              image={require('../assets/amund.jpeg')}
              title='Amund Ring'
              subTitle='5 listings'
            ></ListItem>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.contactContainer}>
        <ContactSellerForm listing={listing} />
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
  image: {
    width: '100%',
    height: 300
  },
  detailsContainer: {
    paddingTop: 10,
    paddingHorizontal: 20
  },
  title: {
    fontWeight: '500',
    fontSize: 24
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5
  },
  contactContainer: {
    paddingHorizontal: 20
  }
});

export default ListingDetailsScreen;
