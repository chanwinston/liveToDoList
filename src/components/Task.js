import { FaTimes, FaEdit } from "react-icons/fa";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { doc, setDoc } from "firebase/firestore";

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

function Task(props) {
  const { text, day, reminder, uid } = props.message;

  async function deleteTask() {
    await firestore
      .collection("tasks")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          if (doc.data().uid === uid) {
            firestore.collection("tasks").doc(doc.id).delete();
          }
        });
      });
  }

  async function markedDone() {
    await firestore
      .collection("tasks")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((docs) => {
          if (docs.data().uid === uid) {
            setDoc(doc(firestore, "tasks", docs.id), {
              text: docs.data().text,
              day: docs.data().day,
              reminder: !docs.data().reminder,
              uid: docs.data().uid,
            });
          }
        });
      });
  }

  async function editTask() {
    await firestore
      .collection("tasks")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((docs) => {
          if (docs.data().uid === uid) {
            let newText = prompt("task", docs.data().text);
            if (newText === "") {
              newText = docs.data().text;
            }
            let newDay = prompt("description", docs.data().day);
            if (newDay === "") {
              newDay = docs.data().day;
            }
            setDoc(doc(firestore, "tasks", docs.id), {
              text: newText,
              day: newDay,
              reminder: docs.data().reminder,
              uid: docs.data().uid,
            });
          }
        });
      });
  }

  return (
    <div className={`task ${reminder ? "reminder" : ""}`}>
      <h3>
        {text}
        <FaTimes
          onClick={deleteTask}
          style={{ color: "black", cursor: "pointer" }}
        />
      </h3>
      <p> {day}</p>
      <div className='clickEdit'>
        <FaEdit
          className='editButton'
          onClick={editTask}
          size='17px'
          style={{ color: "black", cursor: "pointer", marginLeft: "300px" }}
        />
        <button onClick={markedDone} className='btn-done'>
          check
        </button>
      </div>
    </div>
  );
}

export default Task;
