import { get } from 'react-native/Libraries/Utilities/PixelRatio';
import {Logger} from '../utility/logger';
import {StorageService, StorageKeys} from './storageService';

class HelperService {
  appToken;

  async getToken() {
    try {
      this.appToken = await StorageService.get(StorageKeys.appToken);
    } catch (e) {
      Logger.error(e.message);
    }
  }


  async setToken(token){
    await StorageService.set(StorageKeys.appToken, token)
  }
  

  get token() {
    return this.appToken;
  }

}

const helperService = new HelperService();
export {helperService as HelperService};
