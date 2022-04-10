import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import {StorageService, StorageKeys} from './storageService';

const config = {
  apiKey: 'AIzaSyCX0TTAKXeT2wmxblaZeMOumS6VYI9t8C0',
  projectId: 'onecare-chat',
  appId: '1:620472215963:android:2c869bdab447e688af593e',
  databaseURL: 'https://homzhub-deeplinking.firebaseio.com/',
  messagingSenderId: '894249713165',
  authDomain: 'homzhub-deeplinking.firebaseapp.com',
  storageBucket: 'homzhub-deeplinking.appspot.com',
};

class FirebaseService {
  deviceToken;
  fireStoreInstance;

  constructor() {
    this.init();
    this.fireStoreInstance = firestore();
  }

  async init() {
    await firebase.initializeApp(config);
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
