// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBXcCRtwNti4qnEY7HIHQG9JVDx_3hoaIM",
  authDomain: "clone-march--21.firebaseapp.com",
  projectId: "clone-march--21",
  storageBucket: "clone-march--21.appspot.com",
  messagingSenderId: "598836940370",
  appId: "1:598836940370:web:1ac840f67f37630673d98b",
  measurementId: "G-00Z3NTERQ6"
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider };