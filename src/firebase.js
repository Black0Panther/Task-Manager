import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCsJFB8G96ygIUO48-gthER6YQQy4Yvt0",
  authDomain: "datence-35db3.firebaseapp.com",
  projectId: "datence-35db3",
  storageBucket: "datence-35db3.firebasestorage.app",
  messagingSenderId: "416157766788",
  appId: "1:416157766788:web:63f15bb81c3702b3ba1ed1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);