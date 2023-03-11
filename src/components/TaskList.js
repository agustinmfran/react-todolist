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
    <div>
      <Link
        to="/create-task"
        className="bg-green-500 px-2 py-1 rounded-sm text-sm text-white"
      >
        Create Task
      </Link>
      <div className="grid grid-cols-3 gap-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-neutral-200 p-4 rounded-md">
            <div className="flex justify-between">
              <h3 className="font-bold">{task.title}</h3>
              <div className="flex gap-x-1">
                <Link
                  to={`/edit-task/${task.id}`}
                  className="bg-zinc-400 px-2 py-1 my-1 rounded-md text-xs text-black"
                >
                  Edit
                </Link>
                <button
                  className="bg-red-500 px-2 py-1 my-1 rounded-md text-xs text-black"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </div>
            </div>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
