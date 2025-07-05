import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myobj ={
    name: "chaiorcode",
    age: 30,
    isActive: true,
    skills: ["HTML", "CSS", "JavaScript"]
  }
let newarry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <>
 <h1 className='bg-green-400 text-white
  p-4 rounded-xl'>Tailwind test</h1>

<Card username="jerry" btnText="click me" />
<Card username="siri" btnText="submit" />
    </>
  )
}

export default App
