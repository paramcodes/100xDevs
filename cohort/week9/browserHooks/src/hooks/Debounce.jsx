import {useEffect, useState} from "react";

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        let timeoutNumber = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => clearTimeout(timeoutNumber);
    },[value])
    return debouncedValue;
}

export function Debounce() {
    const [inputValue, setInputValue] = useState('');
    const debouncedValue = useDebounce(inputValue, 500);

    return (
        <>
            <input type={"text"} value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder={"Search..."}/>
            Debounced Value is {debouncedValue}
        </>
    )
};