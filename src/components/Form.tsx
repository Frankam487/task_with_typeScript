import TaskType from "../taskType";

export function Form({ data, change, setData, setChange }: TaskType) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (change.trim() !== "") {
      const newTask = {
        id: new Date().getTime(),
        name: change.trim(),
      };

      setData([...data, newTask]);
      setChange("");
    } else {
      alert("Le formulaire ne peut pas être vide !");
    }
  };

  return (
    <div className="mt-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label
          htmlFor="taskInput"
          className="text-gray-700 font-semibold text-sm"
        >
          Entre une nouvelle tâche à faire cette semaine :
        </label>

        <input
          type="text"
          id="taskInput"
          placeholder="Entrer une tâche"
          value={change}
          onChange={(e) => setChange(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="submit"
          value="Ajouter"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg cursor-pointer transition-colors duration-200"
        />
      </form>
    </div>
  );
}
