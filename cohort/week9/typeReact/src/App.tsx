import './App.css'

function App() {

  return (
    <>
        <Todo title={"go to gym"} description={"go early in the morning"} done={false}/>
    </>
  )
}

function Todo({title,description,done}:{title:string,description:string,done:boolean}){
    return (
        <div>
            {title}: {description} | {done ? "Completed" : "Pending"}
        </div>
    )
}

export default App
