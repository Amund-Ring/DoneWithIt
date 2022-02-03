import Constants from 'expo-constants';

const settings = {
  dev: {
    apiUrl: 'http://192.168.1.78:9000/api'
  },
  staging: {
    apiUrl: 'https://backend-for-donewithit.herokuapp.com/api'
  },
  prod: {
    apiUrl: 'https://backend-for-donewithit.herokuapp.com/api'
  }
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === 'staging') return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();