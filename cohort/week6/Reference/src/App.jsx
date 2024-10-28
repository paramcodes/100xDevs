import {useEffect, useRef, useState} from 'react'
import './App.css'
import {Assignment1} from "./components/Assignment1.jsx";
import {Assignment2} from "./components/Assignment2.jsx";

function App() {

    const divRef = useRef();

    useEffect(()=>{
        setTimeout(()=>{
            divRef.current.innerHTML = '10';
        },5000);
    },[]);

    const incomeTax = 20000;

  return (
    <>
        Hii there,your income Tax Returns are <div ref={divRef}>{incomeTax}</div>
        {/*<Assignment1/>*/}
        <Assignment2/>
    </>
  )
}

export default App
