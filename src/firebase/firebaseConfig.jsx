import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyAdwjIC05bE9Y1LQi2CudfVXsrHmUvKQKA",
    authDomain: "project-eve-7bddf.firebaseapp.com",
    projectId: "project-eve-7bddf",
    storageBucket: "project-eve-7bddf.firebasestorage.app",
    messagingSenderId: "127264942050",
    appId: "1:127264942050:web:0e2c8cdf9043d9ec543bbb",
    measurementId: "G-2FDX7B2ZXR"
  };


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);
