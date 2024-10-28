import {memo, useCallback, useEffect, useMemo, useState} from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
    const [exchange1Data, setExchange1Data] = useState({});
    const [exchange2Data, setExchange2Data] = useState({});
    const [bankData, setBankData] = useState({});

    useEffect(() => {
        setExchange1Data({returns:100});
    },[]);

    useEffect(() => {
        setExchange2Data({returns:100});
    }, []);

    useEffect(() => {
        setTimeout(()=>{
            setBankData({income:100});
        },5000)
    },[]);

    // const cryptoReturns = useMemo(()=>(exchange1Data.returns + exchange2Data.returns),[exchange1Data,exchange2Data]);
    const calculateCryptoReturns = useCallback(()=>{
        return (exchange1Data.returns + exchange2Data.returns);
    },[exchange1Data,exchange2Data]);
    // const incomeTax = (cryptoReturns + bankData.income) * 0.3;
    const incomeTax = (calculateCryptoReturns() + bankData.income) * 0.3;

  return (
    <>
        Hii there,Your income TAX returns are {incomeTax}
        <Dummy/>
    </>
  )
}

const Dummy = memo(()=>{
    return <h2>Dummy</h2>
})

export default App
