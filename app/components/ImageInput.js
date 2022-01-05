import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import colors from '../config/colors';

function ImageInput({ style, imageUri, onChangeImage }) {
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log('Error reading an image', error);
    }
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={[styles.container, style]}>
        {!imageUri && (
          <MaterialCommunityIcons
            color={colors.medium}
            name='camera'
            size={40}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 100
  },
  image: {
    height: 100,
    width: 100
  }
});

export default ImageInput;
