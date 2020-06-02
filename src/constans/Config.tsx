import Firebase from "firebase";

  const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDbCR_0zvzABRhHLzEb84zPTFV-whWso44",
  authDomain: "skincare-913c7.firebaseapp.com",
  databaseURL: "https://skincare-913c7.firebaseio.com",
  projectId: "skincare-913c7",
  storageBucket: "skincare-913c7.appspot.com",
  messagingSenderId: "104204086778",
  appId: "1:104204086778:web:4bae59a046b22fc1c24843",
  measurementId: "G-TQ6FLVLBEY"
};

let app = Firebase.initializeApp(FIREBASE_CONFIG)
export const db = app.database()