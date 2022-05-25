import { initializeApp } from "firebase/app"

var firebaseConfig = {
  apiKey: "AIzaSyBG8F3pP9AcueGQr46ktqXz2FApOxCl1Hg",
  authDomain: "rote-test.firebaseapp.com",
  databaseURL:
    "https://rote-test-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rote-test",
  storageBucket: "rote-test.appspot.com",
  messagingSenderId: "1051528649365",
  appId: "1:1051528649365:web:e568a824cce686080c999c",
  measurementId: "G-MES4ND9K39",
}

const app = initializeApp(firebaseConfig)
export default app
