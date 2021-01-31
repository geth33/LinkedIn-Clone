import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAjmmbD_2rXTxrCrGmgTuciS2T2PE_et7k",
    authDomain: "linkedin-clone-1862b.firebaseapp.com",
    projectId: "linkedin-clone-1862b",
    storageBucket: "linkedin-clone-1862b.appspot.com",
    messagingSenderId: "208827568251",
    appId: "1:208827568251:web:06a8b250d2d6114c5a92de"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };