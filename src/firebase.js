// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxtKCjIT3N3TV1pxdeTZwqnoPROXHN57E",
  authDomain: "cart-644f5.firebaseapp.com",
  projectId: "cart-644f5",
  storageBucket: "cart-644f5.appspot.com",
  messagingSenderId: "291803572780",
  appId: "1:291803572780:web:46e73ca210c495085d7f89"
};

// Initialize Firebase
export const fireapp=firebase.initializeApp(firebaseConfig);