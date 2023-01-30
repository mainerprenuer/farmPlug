import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBQWpSNib4vpCaGFopElItRXU6QNJLFjhg",
    authDomain: "farmplug-ng.firebaseapp.com",
    databaseURL: "https://farmplug-ng-default-rtdb.firebaseio.com",
    projectId: "farmplug-ng",
    storageBucket: "farmplug-ng.appspot.com", 
    messagingSenderId: "148785554473",
    appId: "1:148785554473:web:253dbe1314bf585d15a838"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };

