import { useState } from "react";
import TaskProps from "../taskProps";


export function Task({ index, task, setData, data }: TaskProps) {
  const [done, setDone] = useState(false);
  const handleClick = (id: number) => {
    const taskUpdate = data.filter((t) => t.id !== id);
    setData(taskUpdate);
  };
  const handleDone = () => {
    setDone(true);
  
  }
  const handleEdit = (id: number) => {
    console.log(id);
    
  };
  return (
    <li
      key={index}
      className="flex items-center justify-between bg-gray-100 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <span className={`text-gray-800 font-medium ${done && `line-through text-gray-100`}`}>{task.name}</span>
      <span className="flex items-center justify-between bg-green-800 px-4 py-1.5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200" onClick={() => handleEdit(task.id)}>
        Editer
      </span>
      <span className="flex -mx-4 items-center justify-between bg-gray-600 px-2 py-1.5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer">
        <strong onClick={() => handleDone(task.id)}>Deja Fait</strong>
      </span>
      <button
        onClick={() => handleClick(task.id)}
        className="ml-4 px-3 py-1 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold transition-colors duration-150"
      >
        Supprimer
      </button>
    </li>
  );
}
