import firebase from 'firebase'
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyDsnWi-c1njM-Bjs2204mzueNnBLt8ilR8",
    authDomain:"xamafi-8e37a.firebaseapp.com",
    projectId: "xamafi-8e37a",
    storageBucket: "xamafi-8e37a.appspot.com",
    messagingSenderId: "318493703716",
    appId: "1:318493703716:web:19003801aeec31829f62b1",
    measurementId: "G-CQL6ZKWMQD"
  });

export const auth = app.auth()
export default app;