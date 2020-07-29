import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';
import 'firebase/firestore';

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyAKvoxD-eAAM9Bf2YYW5V5cuweoHQfwuIM',
    authDomain: 'pokemon-39cd0.firebaseapp.com',
    databaseURL: 'https://pokemon-39cd0.firebaseio.com',
    projectId: 'pokemon-39cd0',
    storageBucket: 'pokemon-39cd0.appspot.com',
    messagingSenderId: '487057230461',
    appId: '1:487057230461:web:9b55ee1545933d5ffa7f14',
    measurementId: 'G-3E7DD1NK30'
  };
  firebase.initializeApp(firebaseConfig);
}

const storage = firebase.storage();
const firestore = firebase.firestore();

export { storage, firestore };
export default firebase;