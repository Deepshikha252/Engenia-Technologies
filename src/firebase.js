// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyD06p1oOC0dz8iYdsOzs4CDU6q_kWe-cRg",
//     authDomain: "data-fa22e.firebaseapp.com",
//     projectId: "data-fa22e",
//     storageBucket: "data-fa22e.appspot.com",
//     messagingSenderId: "282534222970",
//     appId: "1:282534222970:web:56d7e9b8b71b67de8fefc3"
//   };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import 'firebase/auth';
// import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD06p1oOC0dz8iYdsOzs4CDU6q_kWe-cRg",
    authDomain: "data-fa22e.firebaseapp.com",
    projectId: "data-fa22e",
    storageBucket: "data-fa22e.appspot.com",
    messagingSenderId: "282534222970",
    appId: "1:282534222970:web:56d7e9b8b71b67de8fefc3"
  };

// firebase.initializeApp(firebaseConfig);

export const auth = initializeApp.auth();
const app = initializeApp(firebaseConfig);
// export const firestore = firebase.firestore();
