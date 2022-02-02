import React, { useEffect, useState } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';

import colors from '../config/colors';

function UploadScreen({ onDone, progress = 0, visible = false }) {
  const [progressVisible, setProgressVisible] = useState(true);
  const [doneVisible, setDoneVisible] = useState(false);

  useEffect(() => {
    setProgressVisible(true);
    setDoneVisible(false);
    if (progress === 1) {
      setTimeout(() => {
        setProgressVisible(false);
        setDoneVisible(true);
      }, 1000);
    }
  }, [progress]);

  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progressVisible && (
          <Progress.Bar color={colors.primary} progress={progress} />
        )}
        {doneVisible && (
          <LottieView
            source={require('../assets/animations/done.json')}
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            style={styles.animation}
            speed={1.5}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  animation: {
    width: 120
  }
});

export default UploadScreen;
