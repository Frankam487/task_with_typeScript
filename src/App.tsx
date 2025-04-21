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

  return (
    <div className="">
      <h1>Liste des taches a faire cette semaine !!!!!!</h1>
      <div className="">
        <ul className=" flex flex-col justify-center align-center">

        {data.map((task, index) => (
          <li key={index}>{task.name} <button className="p-2 bg-gray-300 hover:bg-red">X</button></li>
        ))}
        </ul>
        <form action="">
          <label htmlFor="">Entre une nouvelle tache a faire cette semaine...</label>
          <input type="text"  className="border" placeholder="Entrer une tache" onChange={(e) => setChange(e.target.value)} />
          <input type="submit" value="Valider" id="" />
        </form>
      </div>
    </div>
  );
}
export default App;