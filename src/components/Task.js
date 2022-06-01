import { FaTimes, FaEdit } from "react-icons/fa";
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`}>
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "black", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
      <button className='btn-done' onClick={() => onToggle(task.id)}>
        click
      </button>
      {/* <FaEdit size='17px'style={{color:'black', cursor:'pointer', marginLeft:'406px'}} /> */}
    </div>
  );
};
export default Task;
