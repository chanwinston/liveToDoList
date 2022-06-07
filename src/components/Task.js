import { FaTimes, FaEdit } from "react-icons/fa";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { doc, setDoc } from "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDk3qXciPGrWLtlURBPrrSWhocjFmhs_tk",
  authDomain: "livetodolist-66f7e.firebaseapp.com",
  projectId: "livetodolist-66f7e",
  storageBucket: "livetodolist-66f7e.appspot.com",
  messagingSenderId: "10787261151",
  appId: "1:10787261151:web:6e59ed708a88d49f15776a",
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
      <button onClick={markedDone} className='btn-done'>
        click
      </button>
      <FaEdit
        size='17px'
        style={{ color: "black", cursor: "pointer", marginLeft: "406px" }}
      />
    </div>
  );
}

export default Task;
