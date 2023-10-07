import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCbZpGro34DMwrQbvHrH6uz_FLzbA4dl_Q",
    authDomain: "news-clone-3ab5d.firebaseapp.com",
    projectId: "news-clone-3ab5d",
    storageBucket: "news-clone-3ab5d.appspot.com",
    messagingSenderId: "1058377548666",
    appId: "1:1058377548666:web:4192cd4b56d52e71e18cc3"
};
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase};