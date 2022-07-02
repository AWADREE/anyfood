// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL36aYN16qh_6R9_IKAlKsPREDgFGuQJo",
  authDomain: "anyfood-2cdbd.firebaseapp.com",
  projectId: "anyfood-2cdbd",
  storageBucket: "anyfood-2cdbd.appspot.com",
  messagingSenderId: "620209233873",
  appId: "1:620209233873:web:1ea2c04af609ac353b4af0",
};

// Initialize Firebase
let app;

if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export{auth};

