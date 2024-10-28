import './App.css'
import {Header} from "./components/Header.jsx";
import {Random} from "./components/Random.jsx";
import {useState} from "react";

function App() {
    const [title, setTitle] = useState("Raj");
  return (
      <>
          <button onClick={()=>{setTitle("My Name is "+Math.random())}}>Click ME</button>
          <Header title={title} />
          {/*<HeaderWithTitle/>*/}
        <Header title={"Hello World"} />
        <Header title={"Good Bye"} />
          <Random/>
      </>
  )
}

function HeaderWithTitle() {
    const [title, setTitle] = useState("Raj");
    return (
        <div>
            <button onClick={() => {
                setTitle("My Name is " + Math.random())
            }}>Click ME
            </button>
            <Header title={title}/>
        </div>
    )
}


export default App
