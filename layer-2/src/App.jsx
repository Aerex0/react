import { useState } from "react";

function App() { 
  let [numWeapons, setNumWeapons] = useState(10);

  const addWeapons = () => {
    setNumWeapons(numWeapons + 1);
  }
  const removeWeapons = () => {
    setNumWeapons(numWeapons - 1);
  }
  return (
    <>
    <h1>Dark World: The Game</h1>
    <h2>Choose your weapons: {numWeapons}</h2>
    <button onClick={addWeapons}>Add Weapons:{numWeapons}</button>
    <br />
    <button onClick={removeWeapons}>Remove Weapons:{numWeapons}</button>
    </>
  )
}

export default App
