import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyA_XxSzXd9CcEtsg1pM08SY9N0AEA93X-E",
    authDomain: "react-f0805.firebaseapp.com",
    projectId: "react-f0805",
    storageBucket: "react-f0805.appspot.com",
    messagingSenderId: "987299999681",
    appId: "1:987299999681:web:af2398d003205ec5600940"
  };
  // Initialize Firebase
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  const auth=firebase.auth();

  export {auth};
  export default db