import { FaTimes, FaEdit } from "react-icons/fa";

function Task(props) {
  const { text, day, reminder } = props.message;
  return (
    <div className={`task ${reminder ? "reminder" : ""}`}>
      <h3>
        {text}
        <FaTimes style={{ color: "black", cursor: "pointer" }} />
      </h3>
      <p> {day}</p>
      <button className='btn-done'>click</button>
      <FaEdit
        size='17px'
        style={{ color: "black", cursor: "pointer", marginLeft: "406px" }}
      />
    </div>
  );
}

export default Task;
