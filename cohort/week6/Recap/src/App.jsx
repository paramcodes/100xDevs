import {useEffect, useState} from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0);
    const [exchangeData, setExchangeData] = useState({});
    const [bankData, setBankData] = useState({});

    // fetch("https:www.google.com")
    //     .then(async res=>{
    //         const json = await res.json();
    //         setBankData(json);
    //         // Assume it is like {income:100}
    //     })

    useEffect(() => {
        setTimeout(()=>{
            setBankData({income:100});
        },3000);
    },[])

    useEffect(() => {
        setTimeout(()=>{
            setExchangeData({
                returns:100
            });
        },1000);
    }, []);

    const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

  return (
    <>
        Hii there,Your income tax returns are {incomeTax}
      {/*<button onClick={() => setCount((count)=>count + 1)}>Count is {count}</button>*/}
    </>
  )
}

export default App
