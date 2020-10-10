import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCW--7c3Ro8Fcy_IgQxKIpqbR81SHuLJFs",
  authDomain: "clone-babef.firebaseapp.com",
  databaseURL: "https://clone-babef.firebaseio.com",
  projectId: "clone-babef",
  storageBucket: "clone-babef.appspot.com",
  messagingSenderId: "1051608896448",
  appId: "1:1051608896448:web:7496b4fa55d64a82b06e25",
  measurementId: "G-5D0GS79ZND"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };