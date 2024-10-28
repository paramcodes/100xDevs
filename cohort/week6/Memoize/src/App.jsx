import {useEffect, useMemo, useState} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [inputValue,setInputValue] = useState(1);

  // function sumx(n){
  //     if(n===1)return 1;
  //     return n + sumx(n-1);
  // }
  // let ans = sumx(inputValue);

    let ans = useMemo(()=> {
        let counter = 0;
        for (let i = 1; i <= inputValue; i++) {
            counter = counter + i;
        }
        return counter;
    },[inputValue]);


  // let ans = 0;

  // useEffect(() => {
  //     function sumx(n){
  //         if(n === 1)return 1;
  //         return n + sumx(n-1);
  //     }
  //     ans = sumx(inputValue);
  // },[inputValue]);

  return (
    <>
      <input type={'text'} onChange={(e)=>setInputValue(parseInt(e.target.value))} placeholder={"Enter the Number"}/>
        <h2>The SUM of value from 1 to {inputValue} is {ans}</h2>
        <button onClick={() => {
            setCount(count + 1)
        }}>Counter ({count})</button>
    </>
  )
}

export default App
