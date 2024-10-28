import {useEffect, useRef, useState} from "react";

// let count = 0;
export const Assignment2 = ()=>{
    const [,forceRender] = useState(0);
    // const pRef = useRef();
    // count = count + 1;
    const count = useRef(0);
    count.current = count.current + 1;
    // useEffect(() => {
    //     pRef.current.innerHTML = "This component has rendered" + count + "times.";
    // }, [count]);
    const handleReRender = () =>{
        forceRender(Math.random());
    };

    return (
        <div>
            <p>This component has rendered {count.current} times.</p>
            <button onClick={handleReRender}>Force Re-Render</button>
        </div>
    )
}