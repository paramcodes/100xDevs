import {useState} from "react";

export function CreateTodo() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    return (
        <div>
            <input id={'title'} style={{margin:10,padding:10}} type={"text"} onChange={(e)=>setTitle(e.target.value)} placeholder={'title'}/><br/>
            <input id={'description'} style={{margin:10,padding:10}} type={"text"} onChange={(e)=>{setDescription(e.target.value)}} placeholder={'description'}/><br/>
            <button onClick={()=>{
                fetch('https://express-todo-backend.onrender.com/todo',{
                    method: 'POST',
                    body:JSON.stringify({
                        title: title,
                        description: description
                    }),headers:{
                    "Content-type": "application/json"
                }
                }).then(async (res)=>{
                    const json = await res.json();
                    console.log("Todo Added");
                })
            }}>Add a todo</button>
        </div>
    )
}