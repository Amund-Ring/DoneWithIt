import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

export default function App() {
  const [blurred, setBlurred] = useState(false);
  const [bold, setBold] = useState(false);

  const handlePress = () => console.log('Click');
  const handleImagePress = () => console.log('Image clicked');
  const handleLongPress = () => {
    console.log('Image long pressed');
    setBlurred(!blurred);
  };
  const handleLongTextPress = () => {
    setBold(!bold);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text
        onLongPress={handleLongTextPress}
        numberOfLines={2}
        onPress={handlePress}
        style={[{ fontWeight: `${bold ? 'bold' : 'normal'}` }, styles.text]}
      >
        Hello world! A really, really long text. I want to make this even longer
        and see what happens. 🌎
      </Text>
      <TouchableWithoutFeedback
        onPress={handleImagePress}
        onLongPress={handleLongPress}
      >
        <Image
          blurRadius={blurred ? 5 : 0}
          source={{
            width: 200,
            height: 300,
            uri: 'https://picsum.photos/id/237/200/300'
          }}
        />
      </TouchableWithoutFeedback>
      <Text style={{ fontSize: 24 }}>Long press picture to blur</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#46ff86',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 24
  }
});
