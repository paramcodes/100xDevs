import {useEffect, useState} from 'react'
import './App.css'

function App() {
    const [id, setId] = useState(7);
  return (
    <>
        <button onClick={()=>setId(1)}>1</button>
        <button onClick={()=>setId(2)}>2</button>
        <button onClick={()=>setId(3)}>3</button>
        <button onClick={()=>setId(4)}>4</button>
        <button onClick={()=>setId(5)}>5</button>
      <Todo id={id}/>
    </>
  )
}

function Todo({id}){
    const [todo,settodo] = useState([]);
    useEffect(()=>{
        fetch("https://sum-server.100xdevs.com/todo?id="+id)
            .then(async res=>{
                const json = await res.json();
                settodo(json.todo);
            })
    },[id]);
    return(
        <div>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
        </div>
    )
}

export default App
