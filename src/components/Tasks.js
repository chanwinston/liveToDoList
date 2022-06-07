import Task from "./Task";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDk3qXciPGrWLtlURBPrrSWhocjFmhs_tk",
  authDomain: "livetodolist-66f7e.firebaseapp.com",
  projectId: "livetodolist-66f7e",
  storageBucket: "livetodolist-66f7e.appspot.com",
  messagingSenderId: "10787261151",
  appId: "1:10787261151:web:6e59ed708a88d49f15776a",
});
const firestore = firebase.firestore();

function Tasks() {
  const messagesRef = firestore.collection("tasks");
  const query = messagesRef.orderBy("uid").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });

  return (
    <>
      <div>
        <main>{messages && messages.map((msg) => <Task message={msg} />)}</main>
      </div>
      <div className='bg-zinc-800 h-32 rounded-b-3xl max-w-xl m-auto'></div>
    </>
  );
}

export default Tasks;
