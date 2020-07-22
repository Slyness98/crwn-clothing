import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDaDuX6OVZzgzTuvF-kjdhqEHkK92aDNWI",
    authDomain: "crwn-db-ab011.firebaseapp.com",
    databaseURL: "https://crwn-db-ab011.firebaseio.com",
    projectId: "crwn-db-ab011",
    storageBucket: "crwn-db-ab011.appspot.com",
    messagingSenderId: "62956288480",
    appId: "1:62956288480:web:749061db135da1828c1385"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;