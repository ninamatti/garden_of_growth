import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBN4BHk3KDDX98GuxbhyTZpqNohmIn6X1Q",
    authDomain: "garden-of-growth.firebaseapp.com",
    databaseURL: "https://garden-of-growth.firebaseio.com",
    projectId: "garden-of-growth",
    storageBucket: "garden-of-growth.appspot.com",
    messagingSenderId: "312661304078",
    appId: "1:312661304078:web:d382996fb43cc9cf916d5f",
    measurementId: "G-MPD5Q6ETWX"
});
// Initialize Firebase
// firebase.initializeApp(app);


const db = app.firestore();
export const auth = app.auth();
export { db };
export default app;


// export const auth = firebase.auth();
// const  db  = firebase.firestore();
// export { db };

// export default firebase;