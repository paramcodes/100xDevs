import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import {Dashboard} from "./components/Dashboard.jsx";
import {Landing} from "./components/Landing.jsx";

function App() {
  // const navigate = useNavigate();
  return (
      <div>
        <BrowserRouter>
          <Appbar/>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/" element={<Landing />}/>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

const Appbar = ()=>{
  const navigate = useNavigate();
  return (
      <div style={{background: "orange"}}>
        Hii this is the top bar
        <button onClick={() => {
          // window.location.href = '/'
          return navigate('/');
        }}>Home</button>
        <button onClick={() => {
          // window.location.href = '/dashboard'
          return navigate('/dashboard');
        }}>DashBoard
        </button>
      </div>
  )
}

export default App
