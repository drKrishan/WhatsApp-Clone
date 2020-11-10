import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSh5SEGKtMcv1JZvXnEujsW_sebS_h__U",
  authDomain: "whatsapp-mern-4af3b.firebaseapp.com",
  databaseURL: "https://whatsapp-mern-4af3b.firebaseio.com",
  projectId: "whatsapp-mern-4af3b",
  storageBucket: "whatsapp-mern-4af3b.appspot.com",
  messagingSenderId: "603883905863",
  appId: "1:603883905863:web:b8d2564e990a6f45e16262",
  measurementId: "G-JVHW8SPMJG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
