import React, { useEffect, useState } from 'react';

import { FlatList, StyleSheet, View } from 'react-native';

import AppText from '../components/Text';
import Button from '../components/Button';
import Card from '../components/Card';
import colors from '../config/colors';
import listingsApi from '../api/listings';
import routes from '../navigation/routes';
import Screen from '../components/Screen';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';

function ListingsScreen({ navigation }) {
  const {
    data: listings,
    error,
    loading,
    request: loadListings
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && !loading && (
        <View style={styles.error}>
          <AppText>Could not retrive the listings</AppText>
          <View style={styles.errorButton}>
            <Button title='Retry' onPress={loadListings} />
          </View>
        </View>
      )}
      <ActivityIndicator visible={loading} style={styles.loading} />
      <FlatList
        data={listings}
        refreshing={loading}
        onRefresh={loadListings}
        keyExtractor={listing => listing.id.toString()}
        showsVerticalScrollIndicator={false}
        style={styles.list}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            thumbnailUrl={item.images[0].thumbnailUrl }
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light
  },
  error: {
    marginTop: '80%',
    alignItems: 'center',
    alignSelf: 'center',
    width: '70%'
  },
  errorButton: {
    width: '80%'
  },
  loading: {
    marginTop: '65%',
    alignSelf: 'center',
    flex: 1,
    width: 220
  },
  list: {
    overflow: 'visible'
  }
});

export default ListingsScreen;
