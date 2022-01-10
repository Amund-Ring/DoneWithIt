import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ListingEditScreen from '../screens/ListingEditScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name='Feed'
      component={FeedNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name='home'
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
        ),
        title: 'New Listing'
      }}
    />

    <Tab.Screen
      name='AccountTab'
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name='account' color={color} size={size} />
        ),
        headerShown: false,
        title: 'Account'
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
