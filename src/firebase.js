// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCFTkYiPAL0dSuaDvLXBjOxa1qaq1zMEVU",
  authDomain: "slack-clone-b6f67.firebaseapp.com",
  projectId: "slack-clone-b6f67",
  storageBucket: "slack-clone-b6f67.appspot.com",
  messagingSenderId: "396702241753",
  appId: "1:396702241753:web:5e2b5e9e68cca68ed13fc8",
  measurementId: "G-RJEZJF389R",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
