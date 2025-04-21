import { useState } from "react";
import { Form } from "./components/Form";

function App() {
  const [change, setChange] = useState("");
  const [data, setData] = useState([
    {
      id: 1,
      name: "Laver les habits",
    },
    {
      id: 2,
      name: "Faire du nodeJS",
    },
  ]);
  const handleClick = (id: number) => {
    const taskCopy = [...data];
    const taskUpdate = taskCopy.filter((t) => t.id != id);
    setData(taskUpdate);
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
        <Form data={data} setChange={setChange} change={change} setData={setData} />
      </div>
    </div>
  );
}
export default App;