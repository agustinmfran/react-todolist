import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  return (
    <div className="flex flex-col justify-center items-center h-full pt-24 md:pt-0 md:h-screen">
      <div className="pb-12">
        <Link
          to="/create-task"
          className="bg-green-500 px-2 py-1 rounded-md text-3xl md:text-5xl text-white cursor-pointer hover:bg-white hover:text-green-500 hover:transition duration-300"
        >
          Create new task!
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 w-4/6 md:grid-cols-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex flex-col justify-between bg-neutral-200 p-4 rounded-md shadow-lg"
          >
            <div className="flex justify-between">
              <h3 className="font-bold ">{task.title}</h3>
            </div>
            <p>{task.description}</p>
            <div className="flex gap-x-1">
              <Link
                to={`/edit-task/${task.id}`}
                className="bg-zinc-400 px-2 py-1 my-1 rounded-md text-xs text-black cursor-pointer hover:transition duration-300 hover:opacity-50"
              >
                Edit
              </Link>
              <button
                className="bg-red-500 px-2 py-1 my-1 rounded-md text-xs text-black cursor-pointer hover:transition duration-300 hover:opacity-50"
                onClick={() => handleDelete(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
