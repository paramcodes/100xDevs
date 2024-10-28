import React, {Suspense, useState} from 'react'
import './App.css'
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
const Landing = React.lazy(()=>import("./components/Landing.jsx"));
const Dashboard = React.lazy(()=>import('./components/Dashboard.jsx'))

function App() {

  return (
    <>
      <BrowserRouter>
          <AppRoute/>
          <Routes>
              <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Landing/></Suspense>}/>
              <Route path="/dashboard" element={<Suspense fallback={<div>Loading...</div>}><Dashboard/></Suspense>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

const AppRoute = ()=>{
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={()=>navigate('/')}>Home</button>
            <button onClick={()=>navigate('/dashboard')}>DashBoard</button>
        </div>
    )
}

export default App
