import React, { useState } from 'react';
import {
  View,
  Button,
  StyleSheet,
  Alert,
  Text,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

export default function App() {
  const [blurred, setBlurred] = useState(false);
  const [text, setText] = useState('');

  const handleImagePress = () => console.log('Image clicked');
  const handleLongPress = () => {
    console.log('Image long pressed');
    setBlurred(!blurred);
  };

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
    <View
      style={{
        backgroundColor: '#fbd6f5',
        flex: 1
      }}
    >
      <View
        style={[styles.container, { backgroundColor: 'dodgerblue', flex: 3 }]}
      >
        <TouchableWithoutFeedback onPress={handleImagePress} onLongPress={handleLongPress}>
        <Image
          blurRadius={blurred ? 5 : 0}
          style={{marginTop: 50}}
          source={{
            width: 180,
            height: 200,
            uri: 'https://picsum.photos/id/237/200/300'
          }}
        />
        </TouchableWithoutFeedback>
        
        <Text style={styles.text}>Long press to {blurred ? 'unblur' : 'blur'}</Text>
      </View>

      <View style={[styles.container, { backgroundColor: 'gold' }]}>
        <Button title={'Click me!'} onPress={handleClick} color="blue" />
      </View>

      <View style={[styles.container, { backgroundColor: 'tomato' }]}>
        <Button title={'Click me 2!'} onPress={handleClick2} color="#0d1716" />
      </View>

      <View style={[styles.container, { backgroundColor: 'dodgerblue' }]}>
        <Button
          title={'Me 3, please.'}
          onPress={handleClick3}
          color="#440b47"
        />
      </View>

      <View style={[styles.container, { backgroundColor: 'gold', flex: 2 }]}>
        <Text style={styles.text}>Text: {text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 28
  }
});
