import { useState } from 'react'
import './App.css'
// sameer aali
function App() {
  const [counter, setCounter] = useState(0);


  function addCounter(){
    setCounter(counter + 1);
  }

  function subCounter(){
    if(counter > 0){
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <p>{counter}</p>
      <button onClick={addCounter}>ADD +</button>
      <button onClick={subCounter}>Sub -</button>
    </>
  )
}

export default App
