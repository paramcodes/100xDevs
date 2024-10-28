import {useContext, useState} from 'react'
import './App.css'
import {Context} from "./Context.jsx";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Context.Provider value={count}>
                <Count setCount={setCount}/>
            </Context.Provider>
        </>
    )
}

const Count = ({setCount})=>{
    return <div>
        <CountRenderer/>
        <Buttons setCount={setCount}/>
    </div>
}

const CountRenderer = () =>{
    const count = useContext(Context);
    return(
        <div>
            {count}
        </div>
    )
}

const Buttons = ({setCount})=>{
    const count = useContext(Context);
    return <div>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
}

export default App