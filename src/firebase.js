// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBV9WJRHolUwbtiKx79ABZjhXXy5_yZJzU",
    authDomain: "twooter-58059.firebaseapp.com",
    projectId: "twooter-58059",
    storageBucket: "twooter-58059.appspot.com",
    messagingSenderId: "432428966745",
    appId: "1:432428966745:web:3ac9222a5be3b9a2dae248",
    measurementId: "G-YHV39NZDR0"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;