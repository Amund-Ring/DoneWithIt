import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  Button,
  Alert,
  Platform
} from 'react-native';

export default function App() {
  const [text, setText] = useState('');

  const handleClick = () => {
    console.log('Button clicked.');
    alert('Button tapped.');
  };

  const handleClick2 = () => {
    Alert.alert('Alert', 'Did you mean to click this button?', [
      { text: 'Yes', onPress: () => console.log('"Yes" was clicked.') },
      { text: 'No', onPress: () => console.log('"No" was clicked.') }
    ]);
  };

  const handleClick3 = () => {
    Alert.prompt('Set text:', '', txt => setText(txt));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title={'Click me!'} onPress={handleClick} color="red" />
      <Button title={'Click me 2!'} onPress={handleClick2} color="blue" />
      <Button title={'Me 3, please.'} onPress={handleClick3} color="purple" />
      <Text style={styles.text}>
        Text: {text}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#46ff86',
    backgroundColor: Platform.OS === "ios" ? '#46ff86' : 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18
  }
});
