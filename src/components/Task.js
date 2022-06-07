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

const Task = ({ task, onToggle }) => {
  async function deleteTask() {
    let dataID = [];
    await firestore
      .collection("tasks")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          if (doc.data().id === task.id) {
            dataID.push(doc.id);
          }
        });
      });
    let lastMessage = dataID[dataID.length - 1];
    return firestore.collection("tasks").doc(lastMessage).delete();
  }

  async function markedDone() {
    await firestore
      .collection("tasks")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((docs) => {
          if (docs.data().id === task.id) {
            setDoc(doc(firestore, "tasks", String(task.id)), {
              text: task.text,
              day: task.day,
              reminder: !task.reminder,
              id: task.id,
            });
          }
        });
      });
  }

  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`}>
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "black", cursor: "pointer" }}
          onClick={deleteTask}
        />
      </h3>
      <p>{task.day}</p>
      <button className='btn-done' onClick={markedDone}>
        click
      </button>
      <FaEdit
        size='17px'
        style={{ color: "black", cursor: "pointer", marginLeft: "406px" }}
      />
    </div>
  );
};
export default Task;
