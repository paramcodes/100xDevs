import { useState } from 'react'
import './App.css'
import {Assignment1} from "./components/Assignment1.jsx";
import {Assignment2} from "./components/Assignment2.jsx";
import {Assignment3} from "./components/Assignment3.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*<Assignment1/>*/}
      {/*  <Assignment2/>*/}
        <Assignment3/>
    </>
  )
}

export default App
