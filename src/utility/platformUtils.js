import {Platform} from 'react-native';

export const isAndroid = () => {
  return Platform.OS === 'android';
};

export const isIOS = () => {
  return Platform.OS === 'ios';
};

export const isWeb = () => {
  return Platform.OS === 'web';
};

export const isMobile = () => {
  return isAndroid() || isIOS();
};

export const getPlatform = () => Platform.OS;
