import {StorageService, StorageKeys} from './storageService';

class FirebaseService {
  deviceToken;

  constructor() {
    this.createChannel();
  }

  createChannel() {}

  init() {}

  async getDeviceToken() {
    return await StorageService.get(StorageKeys.deviceToken);
  }
}

const firebaseService = new FirebaseService();
export {firebaseService as FirebaseService};
