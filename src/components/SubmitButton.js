import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDk3qXciPGrWLtlURBPrrSWhocjFmhs_tk",
  authDomain: "livetodolist-66f7e.firebaseapp.com",
  projectId: "livetodolist-66f7e",
  storageBucket: "livetodolist-66f7e.appspot.com",
  messagingSenderId: "10787261151",
  appId: "1:10787261151:web:6e59ed708a88d49f15776a",
});

const firestore = firebase.firestore();
const taskRef = firestore.collection("tasks");

async function action() {
  await taskRef.add({
    text: "123",
    day: "123",
    reminder: false,
    id: 3,
  });
}

function SubmitButton() {
  return <button onClick={action}>Test</button>;
}

export default SubmitButton;
