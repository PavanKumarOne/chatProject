import AsyncStorage from '@react-native-async-storage/async-storage';

export const StorageKeys = Object.freeze({
  deviceToken: '@device_token',
  appToken: '@app_token',
});

class StorageService {
  get = async key => {
    const value = await AsyncStorage.getItem(key);
    if (!value) {
      return null;
    }

    return JSON.parse(value);
  };

  set = async (key, data) => {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  };

  remove = async key => {
    await AsyncStorage.removeItem(key);
  };

  reset = async () => {
    await AsyncStorage.clear();
  };
}
const storageService = new StorageService();
export {storageService as StorageService};
