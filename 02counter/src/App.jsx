import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setCounter] =  useState(15);
//let counter = 15;

const addValue = () =>{
  console.log("clciked",counter);
 // counter = counter + 1;
  setCounter(counter + 1);
  setCounter(prevcounter => prevcounter +1);
 setCounter(prevcounter => prevcounter +1);
  setCounter(prevcounter => prevcounter +1);

  


}
const removeValue = ()=>{
  console.log("clciked",counter);
  counter = counter - 1;
  setCounter(counter);
}

  return (
    <>
<h1>chai or react</h1>
<h2>counter value : {counter}</h2>

<button onClick={addValue}>Add value {counter}</button>
<br />
<button onClick={removeValue}>remove value {counter}</button>
<p>footer: {counter}</p>
    </>
  )
}

export default App
