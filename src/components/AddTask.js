import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

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
const taskRef = firestore.collection("tasks");

const AddTask = () => {
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
        taskRef.add({
          text: text,
          day: day,
          reminder: reminder,
          uid: numberTasks,
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
        <input
          type='text'
          placeholder='task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <input
          type='text'
          placeholder='description'
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
