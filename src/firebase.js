import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT-APP-FIREBASE-API-KEY,
    authDomain: process.env.REACT-APP-FIREBASE-AUTH-DOMAIN,
    projectId: process.env.REACT-APP-FIREBASE-PROJECT-ID,
    storageBucket: process.env.REACT-APP-FIREBASE-STORAGE-BUCKET,
    messagingSenderId: process.env.REACT-APP-FIREBASE-MESSAGING-SENDER-ID,
    appId: process.env.REACT-APP-FIREBASE-APP-ID
};
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;




