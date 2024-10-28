import {useEffect, useRef} from "react";

export const Assignment1 = () => {
    const inRef = useRef();
    useEffect(()=>{
        inRef.current.focus();
    },[]);

    const handleButtonClick = ()=>{
        inRef.current.focus();
    }

    return (
        <div>
            <input ref={inRef} type={'text'} placeholder={'Enter text here'}/>
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    )
}