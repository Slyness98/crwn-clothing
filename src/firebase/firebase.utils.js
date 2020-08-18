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
 export const createUserProfileDocument = async (userAuth, additionalData) => {
     if(!userAuth) return;

     const userRef = firestore.doc(`users/${userAuth.uid}`);
     const snapshot = await userRef.get();
     if(!snapshot.exists) {
         const { displayName, email } = userAuth;
         const createdAt = new Date();

         try {
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData  
            })
         } catch (error) {
            console.log('error creating user', error.message);
         }
     }

     return userRef;
 }


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(docSnapshot => {
    const {title, items} = docSnapshot.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: docSnapshot.id,
      title,
      items
    }
  });
  
   return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
      }, reject)
    });
  }


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

  export default firebase;