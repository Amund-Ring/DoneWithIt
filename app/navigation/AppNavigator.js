import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AccountScreen from '../screens/AccountScreen';
import ListingsScreen from '../screens/ListingsScreen';
import ListingEditScreen from '../screens/ListingEditScreen';
import FeedNavigator from './FeedNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    {/* <Tab.Screen
      name='Listings'
      component={ListingsScreen}
      options={{
        // headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name='format-list-bulleted'
            color={color}
            size={size}
          />
        )
      }}
    /> */}

    <Tab.Screen
      name='Feed'
      component={FeedNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name='format-list-bulleted'
            color={color}
            size={size}
          />
        )
      }}
    />

    <Tab.Screen
      name='ListingEdit'
      component={ListingEditScreen}
      options={{
        // headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name='plus-circle'
            color={color}
            size={size}
          />
        )
      }}
    />

    <Tab.Screen
      name='Account'
      component={AccountScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name='account' color={color} size={size} />
        )
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
