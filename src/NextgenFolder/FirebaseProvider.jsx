import { initializeApp } from "firebase/app";
import { createContext, useContext } from "react";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { Firestore, getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBEDbL2fqCTZ0edEfRdDpHRJ7pIJpvVyNc",
    authDomain: "matrixfilteration.firebaseapp.com",
    projectId: "matrixfilteration",
    storageBucket: "matrixfilteration.firebasestorage.app",
    messagingSenderId: "20042193044",
    appId: "1:20042193044:web:a53f61573db24e3244fc81"
};
const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app)
// -----------------------initiliaze store ------------------------
const firestore = getFirestore(app)
//----------------------- create and use context -------------------------
export const FirebaseContext = createContext(app)
export const useFirebase = () => useContext(FirebaseContext)
export default function FirebaseProvider(props) {
    // -----------------login function----------------- 
    function loginUser(email, password) {
        signInWithEmailAndPassword(firebaseAuth, email, password)
    }
    // ---------------- add detial to firestore funciton ----------------------
    const addContact = (name, mobile, email, company, message) => {
        addDoc(collection(firestore, 'contactDetail'), { name, mobile, email, company, message })

    }
    // ----------------function to  get data from  firestore  ------------------
    const getDetail = () => {
        return getDocs(collection(firestore, 'contactDetail'))
    }
    let name = 'anshu'
    return (
        <FirebaseContext.Provider value={{ name, loginUser, addContact, getDetail }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}
