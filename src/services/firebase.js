
import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAkhOSRncxOulFGRnWit3-RVxMZzZaRT1Q",
    authDomain: "app-chat-48635.firebaseapp.com",
    projectId: "app-chat-48635",
    storageBucket: "app-chat-48635.appspot.com",
    messagingSenderId: "919620236100",
    appId: "1:919620236100:web:3a9914d06fc98e533b1d11",
    measurementId: "G-FF3SGVPDT4"
  };

const app = firebase.initializeApp(firebaseConfig)

const db = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, provider}