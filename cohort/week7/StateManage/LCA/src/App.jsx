import './App.css'
import {RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import {countAtom} from "./store/atoms/count.jsx";
import {useMemo} from "react";
import {evenSelector} from "./store/atoms/selector.jsx";

function App() {

    return (
        <>
            <RecoilRoot>
            <Count/>
            </RecoilRoot>
        </>
    )
}

const Count = ()=>{
    return <div>
        <CountRenderer/>
        <Buttons />
        <Even/>
    </div>
}

const Even = ()=>{
    const count = useRecoilValue(countAtom);
    // const isEven = useMemo(()=>count % 2 === 0,[count]);
    const isEven = useRecoilValue(evenSelector);
    if(isEven)return <div>It is Even</div>
}

const CountRenderer = () =>{
    const count = useRecoilValue(countAtom);
    return(
        <div>
            {count}
        </div>
    )
}

const Buttons = ()=>{
    // const [count,setCount] = useRecoilState(countAtom);
    const setCount = useSetRecoilState(countAtom);
    return <div>
        <button onClick={()=>setCount(count=>count + 1)}>Increase</button>
        <button onClick={()=>setCount(count=>count - 1)}>Decrease</button>
    </div>
}

export default App
