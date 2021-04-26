import firebase from 'firebase';





   var firebaseConfig = {
    apiKey: "AIzaSyDbWgUXWTeASzZp1fb_VNtIjWnWARhI8o0",
    authDomain: "barter-app-86794.firebaseapp.com",
    projectId: "barter-app-86794",
    databaseURL:'https://console.firebase.google.com/project/barter-app-86794/firestore/data/',
    storageBucket: "barter-app-86794.appspot.com",
    messagingSenderId: "258232628324",
    appId: "1:258232628324:web:e37592a27b61c659951b71",
    measurementId: "G-3RD3YGGXTJ"
  };
  // Initialize Firebase
  if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }





  export default firebase.firestore();

















