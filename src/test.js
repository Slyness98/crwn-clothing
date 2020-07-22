import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('M45LXs9af5qzEodDLuvh').collection('cartItems').doc('vZ5YXFnsotKXrbPArybv');
firestore.doc('/users/M45LXs9af5qzEodDLuvh/cartItems/vZ5YXFnsotKXrbPAry');
firestore.collection('/users/M45LXs9af5qzEodDLuvh/cartItems');