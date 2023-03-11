import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(editTask(task));
    } else {
      dispatch(addTask({ ...task, id: uuid() }));
    }
    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, [params.id, tasks]);

  return (
    <div className="flex items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-400 max-w-sm p-4 rounded-md shadow-lg"
      >
        <label htmlFor="title" className="block text-sm font-bold mb-1">
          Task:
        </label>
        <input
          name="title"
          type="text"
          placeholder="Title"
          onChange={handleChange}
          value={task.title}
          className="w-full p-2 rounded-md bg-neutral-200 mb-2"
        />
        <label htmlFor="description" className="block text-sm font-bold mb-1">
          Description:
        </label>
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          value={task.description}
          className="w-full p-2 rounded-md bg-neutral-200 mb-2"
        />
        <button className="bg-green-500 border border-green-600 px-2 py-1 my-1 rounded-md text-md text-black hover:opacity-50">
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
