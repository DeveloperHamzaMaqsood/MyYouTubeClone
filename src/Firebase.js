import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAUH7pqeBH7f0na9sYTALNkfg-4EGrulE8",
    authDomain: "clone-d70c0.firebaseapp.com",
    projectId: "clone-d70c0",
    storageBucket: "clone-d70c0.appspot.com",
    messagingSenderId: "237691381381",
    appId: "1:237691381381:web:a83d43ed598ba57857abec"
};

    
    firebase.initializeApp(firebaseConfig)

    export default firebase.auth()