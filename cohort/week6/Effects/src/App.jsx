import {useEffect, useState} from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [todos, settodos] = useState([{id:1,title:"Go to GYM",description:"Go from 9-5"}]);

    // useEffect(() => {
    //     fetch("https://express-todo-backend.onrender.com/todos")
    //         .then(async res => {
    //             const json = await res.json();
    //             settodos([...json.todos]);
    //         })
    // }, []);

    useEffect(()=>{
        axios.get("https://express-todo-backend.onrender.com/todos")
            .then(res=>settodos(res.data.todos));
    },[])

    // fetching based on id
    // useEffect(() => {
    //     axios.get("https://sum-server.100xdevs.com/todo?id=1")
    //         .then(res=>{settodos(res.data.todo)});
    // }, []);

  return (
    <>
        {todos.map(todo=><Todo key={todo.id} title={todo.title} description={todo.description}/>)}
    </>
  )
}

function Todo({title,description}){
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default App
