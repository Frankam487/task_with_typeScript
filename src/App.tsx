import { useState } from "react";
import { Form } from "./components/Form";
import { Task } from "./components/Task";

function App() {
  const [change, setChange] = useState("");
  const [datas, setData] = useState([
    {
      id: 1,
      name: "Laver les habits",
    },
    {
      id: 2,
      name: "Faire du NodeJS",
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          📝 Liste des tâches à faire cette semaine
        </h1>

        <ul className="space-y-4 mb-6">
          {datas.map((task) => (
            <Task
              key={task.id}
              data={datas}
              task={task}
              index={task.id}
              setData={setData}
            />
          ))}
        </ul>

        <Form
          data={datas}
          setChange={setChange}
          change={change}
          setData={setData}
        />
      </div>
    </div>
  );
}

export default App;
