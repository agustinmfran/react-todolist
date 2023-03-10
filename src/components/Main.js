import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function Main() {
  return (
    <div className="flex flex-col justify-center items-center pt-24">
      <h1>Holis</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default Main;
