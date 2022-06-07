import Date from "./components/Date";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  return (
    <div className='container'>
      <Date />
      <AddTask />
      <Tasks />
    </div>
  );
};

export default App;
