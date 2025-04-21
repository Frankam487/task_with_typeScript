import { useState } from "react";

function App() {
  const [change, setChange] = useState('');
  const [data, setData] = useState([
    {
      id: 1,
      name: "Laver les habits"
    },
    {
      id: 2,
      name: "Faire du nodeJS"
    },
  ])
  const handleClick = (id: number) => {
    const taskCopy = [...data];
    const taskUpdate = taskCopy.filter((t) => t.id != id);
    setData(taskUpdate);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const taskCopy = [...data];

    const newdata = {
      id: new Date().getTime(),
      name: change
    }
    taskCopy.push(newdata);
    setData(taskCopy)
  };
  return (
    <div className="">
      <h1>Liste des taches a faire cette semaine !!!!!!</h1>
      <div className="">
        <ul className=" flex flex-col justify-center align-center">
          {data.map((task, index) => (
            <li key={index}>
              {task.name}{" "}
              <button
                className="p-2 bg-gray-900 hover:bg-red"
                onClick={() => handleClick(task.id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            Entre une nouvelle tache a faire cette semaine...
          </label>
          <input
            type="text"
            className="border"
            placeholder="Entrer une tache"
            onChange={(e) => setChange(e.target.value)}
          />
          <input type="submit" value="Valider" />
        </form>
      </div>
    </div>
  );
}
export default App;