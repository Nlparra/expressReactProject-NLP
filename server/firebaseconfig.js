const firebase = require('firebase')
require('dotenv').config()

  // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "expressreactnlp.firebaseapp.com",
    databaseURL: "https://expressreactnlp.firebaseio.com",
    projectId: "expressreactnlp",
    storageBucket: "expressreactnlp.appspot.com",
    messagingSenderId: "498295794424",
    appId: "1:498295794424:web:aecd7792eb26e70420690d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  console.log('firebase Initialized',process.env.FIREBASE_API_KEY)
  