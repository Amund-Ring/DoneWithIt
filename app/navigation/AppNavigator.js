import React, { useEffect, useRef, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

import AccountNavigator from './AccountNavigator';
import expoPushTokens from '../api/expoPushTokens';
import FeedNavigator from './FeedNavigator';
import ListingEditScreen from '../screens/ListingEditScreen';
import NewListingButton from './NewListingButton';

const Tab = createBottomTabNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false
  })
});

const AppNavigator = () => {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    // registerForPushNotifications().then(token => setExpoPushToken(token));
    registerForPushNotifications();

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current =
      Notifications.addNotificationReceivedListener(notification => {
        setNotification(notification);
      });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener(response => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  // const getToken = async () => {
  //   if (Constants.isDevice) {
  //     const token = (await Notifications.getExpoPushTokenAsync()).data;
  //     console.log(token);
  //     sendPushNotification(token);
  //   }
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     getToken();
  //   }, 5000);
  // }, []);

  const registerForPushNotifications = async () => {
    try {
      if (Constants.isDevice) {
        const { status: existingStatus } =
          await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }
        if (finalStatus !== 'granted') {
          alert('Failed to get push token for push notification!');
          return;
        }
        const token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
        expoPushTokens.register(token);
      }
    } catch (error) {
      console.log('Error getting a push token', error);
    }
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Feed'
        component={FeedNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='home' color={color} size={size} />
          )
        }}
      />

      <Tab.Screen
        name='ListingEdit'
        component={ListingEditScreen}
        options={({ navigation }) => ({
          // headerShown: false,
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate('ListingEdit')}
            />
          ),
          title: 'New Listing'
        })}
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
};

// Can use this function below, OR use Expo's Push Notification Tool-> https://expo.dev/notifications
async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'Original Title',
    body: 'And here is the body!',
    data: { someData: 'goes here' }
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message)
  });
}

export default AppNavigator;
