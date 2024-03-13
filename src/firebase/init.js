// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyDSUuG0yH0RUNbbqbBNmdNdfAT4j9vf5z4",
    authDomain: "tudu-4e054.firebaseapp.com",
    projectId: "tudu-4e054",
    storageBucket: "tudu-4e054.appspot.com",
    messagingSenderId: "268282713710",
    appId: "1:268282713710:web:0c980d3d9ca58d463d387f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
export default db