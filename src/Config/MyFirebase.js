import firebase from 'firebase'

  var firebaseConfig = {
    apiKey: "AIzaSyBxpgFy1NzJ6DXG2FmeB7AelOSaU6fN8kE",
    authDomain: "chat-app-2592c.firebaseapp.com",
    projectId: "chat-app-2592c",
    storageBucket: "chat-app-2592c.appspot.com",
    messagingSenderId: "372039973647",
    appId: "1:372039973647:web:8d28ef7f5ad46f4eb01c7a",
    measurementId: "G-BCT9LXCZSX"
  };
  
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export const myFirebase = firebase
export const myFirestore = firebase.firestore()
export const myStorage = firebase.storage()
