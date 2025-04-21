interface Task {
  id: number;
  name: string;
}
type TaskType = {
  handleClick: (id: number) => void;
  index: number;
  task: Task;
  data: Task[];
  setData: React.Dispatch<React.SetStateAction<Task[]>>;
};

export function Task({ index, task , setData, data}: TaskType) {
   const handleClick = (id: number) => {
     const taskCopy = [...data];
     const taskUpdate = taskCopy.filter((t) => t.id != id);
     setData(taskUpdate);
   };
  return (
    <div className="task">
      <li key={index}>
        {task.name}{" "}
        <button
          className="p-2 bg-gray-900 hover:bg-red"
          onClick={() => handleClick(task.id)}
        >
          X
        </button>
      </li>
    </div>
  );
}
