import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Fields are empty!");
      return;
    }

    onAdd({ text, day, reminder });

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
      <input type='submit' value='add task' className='btn btn-block' />
    </form>
  );
};

export default AddTask;
