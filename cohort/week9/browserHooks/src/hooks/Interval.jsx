import {useEffect, useState} from "react";

function useInterval(fn, timeout) {
    useEffect(() => {
        const interval = setTimeout(() => fn(), timeout);
        return () => clearInterval(interval);
    },[fn]);
}

export function Interval(){
    const [count,setCount]=useState(0);

    useInterval(()=>{
        setCount(count + 1);
    },1000);

    return (
        <>
            Timer is at {count}
        </>
    )
}