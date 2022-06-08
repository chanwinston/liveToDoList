import { useState } from "react";
import Date from "./components/Date";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(true);

  return (
    <div className='container'>
      <Date onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask />}
      <Tasks />
    </div>
  );
};

export default App;
