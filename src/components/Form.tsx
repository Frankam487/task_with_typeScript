import TaskType from "../taskType";


export function Form({ data, change, setData, setChange }: TaskType) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask = {
      id: new Date().getTime(),
      name: change,
    };

    setData([...data, newTask]);
    setChange("");
    
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="taskInput">
          Entre une nouvelle tâche à faire cette semaine...
        </label>
        <input
          type="text"
          id="taskInput"
          className="border"
          placeholder="Entrer une tâche"
          value={change}
          onChange={(e) => setChange(e.target.value)}
        />
        <input type="submit" value="Valider" />
      </form>
    </div>
  );
}
