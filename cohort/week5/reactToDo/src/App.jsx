import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([{
      title:'Go to Gym',
      description:'Go to Gym from 7 to 9',
      completed: false
  },{
      title:'Study DSA',
      description:'Study DSA from 9 to 11',
      completed: true
  },]);

  function addTodo(){
      setTodos([...todos,{
          title:'random',
          description:'anything',
          completed: false
      }])
  }

  return (
    <>
        <button onClick={addTodo}>Add a random todo</button>
        {/*{JSON.stringify(todos)}*/}
        {/*<Todo title={todos[0].title} description={todos[0].description}/>*/}
        {todos.map((todo) => (
            <Todo title={todo.title} description={todo.description}/>
        ))}
    </>
  )
    function Todo(props) {
      return <div>
          <h1>{props.title}</h1>
          <h2>{props.description}</h2>
      </div>
    }
}

export default App
