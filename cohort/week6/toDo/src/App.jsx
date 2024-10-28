import './App.css'
import {ToDo} from "./components/ToDo.jsx";
import {useEffect, useState} from "react";
// let counter = 0;
function App() {

  const [ToDos,setToDos] = useState([{id:1,title:"Workout",description:"Do it from 9-5"},{id:2,title:"Play",description: "Play Football"},{id:3,title: "Hang out with your Girlfriend",description: "Do it from 9-3"}]);
  // setInterval(()=>{
  //   counter = counter + 1;
  // },10000)
  useEffect(() => {
    // console.log(counter);
    setInterval(()=>{
      fetch("https://express-todo-backend.onrender.com/todos")
          .then(async (res) => {
            const json = await res.json();
            setToDos(json.todos);
          })
    },10000);
  },[]);

  function addToDo(){
    const todo = {
      id:5,
      title:"Study",
      description:"Study from 9-4"
    }
    setToDos([...ToDos,todo]);
  }

  return (
    <>
      <button onClick={addToDo}>Add a todo</button>
      {ToDos.map(todo=> <ToDo key={todo.id} title={todo.title} description={todo.description}/>)}
      {/*<ToDo title={ToDos[0].title} description={ToDos[0].description} />*/}
    </>
  )
}

export default App
