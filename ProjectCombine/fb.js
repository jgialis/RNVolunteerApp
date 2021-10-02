/* fb.js should look something like this*/
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCmk0FsW9yTCjVwUL-_zVD11oPOZefC_Gg",
  authDomain: "volunteerhere-54661.firebaseapp.com",
  projectId: "volunteerhere-54661",
  storageBucket: "volunteerhere-54661.appspot.com",
  messagingSenderId: "174771128043",
  appId: "1:174771128043:web:2ffd90a8e9f3cb2378a0ae",
  measurementId: "G-CHKVHJS471",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
