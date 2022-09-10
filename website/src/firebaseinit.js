import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyCHUT44crImCjPfvKQaMhCaNjT7d6pxG0U",
    authDomain: "kknundipxrnb.firebaseapp.com",
    projectId: "kknundipxrnb",
    storageBucket: "kknundipxrnb.appspot.com",
    messagingSenderId: "1000537730448",
    appId: "1:1000537730448:web:1f9018904aeabbaa671715",
    databaseURL: "https://kknundipxrnb-default-rtdb.firebaseio.com",
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  export default database;