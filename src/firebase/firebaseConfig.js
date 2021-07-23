  import firebase from "firebase";
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCWBInSFKZFz-VFuDmWZFXHQI7qrV6F20k",
    authDomain: "fir-bdd-c098c.firebaseapp.com",
    databaseURL: "https://fir-bdd-c098c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fir-bdd-c098c",
    storageBucket: "fir-bdd-c098c.appspot.com",
    messagingSenderId: "675889471121",
    appId: "1:675889471121:web:60b64684305fbabc096930"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;