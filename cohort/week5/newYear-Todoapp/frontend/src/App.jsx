import {useState} from "react";
import './App.css';
import {CreateTodo} from "./components/CreateTodo.jsx";
import {Todos} from "./components/Todos.jsx";

function App() {
    const [todos, setTodos] = useState([]);
    fetch('https://express-todo-backend.onrender.com/todos').then(async (response)=>{
        const json = await response.json();
        setTodos(json.todos);
    }).catch((err)=>console.log(err));
  return (
    <>
      <CreateTodo/>
        <Todos todos={todos}/>
    </>
  )
}

export default App
