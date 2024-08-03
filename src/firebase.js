import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBM-q7wHbdm9t9XZZSE3A9buiZIUD8HOh4",
  authDomain: "netflix-clone-ab2a9.firebaseapp.com",
  projectId: "netflix-clone-ab2a9",
  storageBucket: "netflix-clone-ab2a9.appspot.com",
  messagingSenderId: "534297902741",
  appId: "1:534297902741:web:621d9668b4f32c40f3659c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error.code);
    toast.error(error.code);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error.code);
    toast.error(error.code);
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
