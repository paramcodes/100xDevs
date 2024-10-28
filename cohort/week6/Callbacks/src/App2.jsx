import {memo, useCallback, useState} from "react";

function App2(){
    const [count,setCount] = useState(0);
    const inputFunction = useCallback(()=>{
        console.log("Hii there");
    },[]);
    return (
        <>
            <ButtonComponent inputFunction={inputFunction}/>
            <button onClick={()=>setCount(count+1)}>Click Me {count}</button>
        </>
    )
}

const ButtonComponent = memo(({inputFunction}) => {
    console.log("Child Render");
    return <div>
        <button>Button Clicked</button>
    </div>
})

export default App2;