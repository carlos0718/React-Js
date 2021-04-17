import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
      apiKey: "AIzaSyD_dWmR9kOJpwAV54GdtW4UzYdhSjDjHE4",
      authDomain: "e-commerce-coderhouse-ef498.firebaseapp.com",
      projectId: "e-commerce-coderhouse-ef498",
      storageBucket: "e-commerce-coderhouse-ef498.appspot.com",
      messagingSenderId: "92393294784",
      appId: "1:92393294784:web:342906448eb899e06e1625"
});

export const getFirebase = () =>{
   return app;
}

export const getFirestore = () =>{
   return firebase.firestore(app);
}