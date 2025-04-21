import TaskProps from "../taskProps";


export function Task({ index, task, setData, data }: TaskProps) {
  const handleClick = (id: number) => {
    const taskUpdate = data.filter((t) => t.id !== id);
    setData(taskUpdate);
  };

  return (
    <li
      key={index}
      className="flex items-center justify-between bg-gray-100 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <span className="text-gray-800 font-medium">{task.name}</span>
      <button
        onClick={() => handleClick(task.id)}
        className="ml-4 px-3 py-1 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold transition-colors duration-150"
      >
        Supprimer
      </button>
    </li>
  );
}
