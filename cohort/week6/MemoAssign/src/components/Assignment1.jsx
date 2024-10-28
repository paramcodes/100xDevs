import {useMemo, useState} from "react";

export const Assignment1 = () => {
    const [input,setInput] = useState(0);
    const expensiveValue = useMemo(()=>{
        let ans = 0;
        for(let i = 1; i <= input; i++){
            ans *= i;
        }
        return ans;
    },[input])
    return (
        <div>
            <input type="number" value={input} onChange={(e)=>setInput(Number(e.target.value))}/>
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    )
}