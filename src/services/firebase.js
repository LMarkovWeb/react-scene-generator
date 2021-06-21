import firebase from "firebase";
import { configFirebase } from "../firebase.config";
firebase.initializeApp(configFirebase);

const FireStoreDB = firebase.firestore();

export { FireStoreDB };
