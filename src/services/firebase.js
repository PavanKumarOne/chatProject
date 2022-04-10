import firestore from '@react-native-firebase/firestore';
import {StorageService, StorageKeys} from './storageService';

class FirebaseService {
  deviceToken;
  fireStoreInstance;

  constructor() {
    this.fireStoreInstance = firestore();
  }

  getCollectionData(collectionName) {
    function onResult(QuerySnapshot) {
      return QuerySnapshot.map(documentSnapshot => documentSnapshot.data());
    }

    function onError(error) {
      console.error(error);
    }

    return this.fireStoreInstance
      .collection(collectionName)
      .onSnapshot(onResult, onError);
  }

  async getDeviceToken() {
    return await StorageService.get(StorageKeys.deviceToken);
  }
}

const firebaseService = new FirebaseService();
export {firebaseService as FirebaseService};
