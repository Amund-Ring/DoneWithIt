import React, { useContext } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import AuthContext from '../auth/context';

import Icon from '../components/Icon';
import ListItem from '../components/lists/ListItem';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from '../navigation/routes';
import authStorage from '../auth/storage';

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
    targetScreen: routes.MESSAGES
  }
];

function AccountScreen({ navigation }) {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    setUser(null);
    authStorage.removeToken();
  };
  

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          image={require('../assets/amund.jpeg')}
          title={user.name}
          subTitle={user.email}
        ></ListItem>
      </View>

      <View style={styles.container}>
        <FlatList
          style={{ marginBottom: 5 }}
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
        onPress={handleLogout}
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
