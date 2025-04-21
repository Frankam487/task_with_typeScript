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
      name: "Faire du nodeJS",
    },
  ]);
 

  return (
    <div className="">
      <h1>Liste des taches a faire cette semaine !!!!!!</h1>
      <div className="">
        <ul className=" flex flex-col justify-center align-center">
          {datas.map((task) => (
            <Task data={datas} task={ task} index={task.id} />
          ))}
        </ul>
        <Form data={datas} setChange={setChange} change={change} setData={setData} />
      </div>
    </div>
  );
}
export default App;