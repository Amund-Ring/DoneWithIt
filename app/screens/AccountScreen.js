import React from 'react';
import {
  FlatList,
  StyleSheet,
  View
} from 'react-native';

import Icon from '../components/Icon';
import ListItem from '../components/lists/ListItem';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import Screen from '../components/Screen';
import colors from '../config/colors';

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.listings
    },
    targetScreen: 'Listings'
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary
    },
    targetScreen: 'Messages'
  }
];

function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          image={require('../assets/amund.jpeg')}
          title='Amund Ring'
          subTitle='ring.amund@gmail.com'
        ></ListItem>
      </View>

      <View style={styles.container}>
        <FlatList style={{marginBottom: 5}}
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              onPress={() => navigation.navigate(item.targetScreen)}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={() => <ListItemSeparator />}
        />
      </View>

      <ListItem
        IconComponent={<Icon name='logout' backgroundColor={colors.logout} />}
        title='Log Out'
      ></ListItem>

    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light
  },
  container: {
    // backgroundColor: colors.white,
    marginVertical: 15
  }
});

export default AccountScreen;
