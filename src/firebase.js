import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoasNiYjqRLckRRLFYtFxLqzoCBVZCStI",
  authDomain: "pannel-v1.firebaseapp.com",
  projectId: "pannel-v1",
  storageBucket: "pannel-v1.appspot.com",
  messagingSenderId: "1057786108807",
  appId: "1:1057786108807:web:c551d2c4fc4a149fac5122"
  };

const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
// export default db;
