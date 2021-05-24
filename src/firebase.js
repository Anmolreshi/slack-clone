import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCrIGhMivG8E8ARhQGR0wiYJSTo9TRpJDA",
    authDomain: "slack-clone-348ed.firebaseapp.com",
    projectId: "slack-clone-348ed",
    storageBucket: "slack-clone-348ed.appspot.com",
    messagingSenderId: "409779832665",
    appId: "1:409779832665:web:12d600d644ac7061032e48"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth,provider,db};