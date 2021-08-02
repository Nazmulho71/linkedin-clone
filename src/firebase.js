import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCTiLwc0AnNt6pFtE_Bi_XvTDZedNBAtAg",
    authDomain: "linkedin-clone-9df3c.firebaseapp.com",
    projectId: "linkedin-clone-9df3c",
    storageBucket: "linkedin-clone-9df3c.appspot.com",
    messagingSenderId: "592693001489",
    appId: "1:592693001489:web:f97cd9f5a6b538763da0b0",
    measurementId: "G-9YVQHZH98B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
