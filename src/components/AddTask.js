import { useState } from "react";
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

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  async function action() {
    if (!text) {
      alert("Fields are empty!");
      return;
    }
    let numberTasks = 1;
    await firestore
      .collection("tasks")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach(() => {
          numberTasks++;
        });
        setDoc(doc(firestore, "tasks", String(numberTasks)), {
          text: text,
          day: day,
          reminder: reminder,
          id: numberTasks,
        });
      });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
    setDay("");
    setReminder(false);
  };
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label></label>
        <input
          type='text'
          placeholder='task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label></label>
        <input
          type='text'
          placeholder='date and time'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <button className='btn btn-block' onClick={action}>
        add task
      </button>
    </form>
  );
};

export default AddTask;
