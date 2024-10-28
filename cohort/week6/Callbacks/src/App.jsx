import {memo, useCallback, useState} from 'react'
import './App.css'
var a = 1;
function App() {
  const [count, setCount] = useState(0)
    var a = useCallback(()=>{
        console.log("Child Rendered");
    },[]);
  return (
    <>
        <button onClick={()=>setCount(count+1)}>Counter ({count})</button>
        <Demo a={a}/>
    </>
  )
}

const Demo = memo(function a({a}) {
    console.log("Re-render");
    return <h2>Hii there</h2>
})

export default App
