// Import the functions you need from the SDKs you need
// import firebase from 'firebase/app';
// import 'firebase/auth'; // Import any Firebase services you need
// import 'firebase/firestore'; // For Firestore, for example

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLsShsrV4CXemefulAFdjxOSNtflQ6psc",
  authDomain: "clone-4caec.firebaseapp.com",
  projectId: "clone-4caec",
  storageBucket: "clone-4caec.appspot.com",
  messagingSenderId: "511510714925",
  appId: "1:511510714925:web:39963fa215c40aa51376a4",
  measurementId: "G-0BN62818PH"
};

// Initialize Firebase
// const firebaseApp = firebase.initializeApp(firebaseConfig);



// export { db, auth };
const firebaseApp = initializeApp(firebaseConfig);

// Get Firebase services
// const auth = getAuth(firebaseApp);
// const firestore = getFirestore(firebaseApp);

// export { auth, firestore };
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
export{db,auth};