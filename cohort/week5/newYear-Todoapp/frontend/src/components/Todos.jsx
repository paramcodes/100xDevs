export function Todos({todos}){
    return (
        <div>
            {
                todos.map(todo=>{return (
                    <div key={todo.id}>
                        <h1>{todo.title}</h1>
                        <h3>{todo.description}</h3>
                        <button>{todo.completed === true ? "Done" : "Mark as Done"}</button>
                    </div>
                )
                })
            }
        </div>
    )
}