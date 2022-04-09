import {Platform} from 'react-native';

const isAndroid = () => {
  return Platform.OS === 'android';
};

const isIOS = () => {
  return Platform.OS === 'ios';
};

const isWeb = () => {
  return Platform.OS === 'web';
};

const isMobile = () => {
  return isAndroid() || isIOS();
};

const getPlatform = () => Platform.OS;

export const PlatformUtils = {
  isAndroid,
  isIOS,
  isWeb,
  isMobile,
  getPlatform,
};
