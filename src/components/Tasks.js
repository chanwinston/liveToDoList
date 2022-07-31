import Task from "./Task";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

require("dotenv").config();

firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
});
const firestore = firebase.firestore();

function Tasks() {
  const messagesRef = firestore.collection("tasks");
  const query = messagesRef.orderBy("uid").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });

  return (
    <>
      <div className='tasksdiv'>
        <main>{messages && messages.map((msg) => <Task message={msg} />)}</main>
      </div>
    </>
  );
}

export default Tasks;
