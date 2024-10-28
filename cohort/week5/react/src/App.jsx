import React, { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0);
  //   let state = {
  //       count:0
  //   }
    let [state, setState] = useState(0);
  return (
    <>
        {/*<button onClick={()=>{*/}
        {/*    setState(state+1);*/}
        {/*    console.log(state.count);*/}
        {/*}}>Counter {state}</button>*/}
        <Custombutton state={state} setState={setState} />
    </>
  )
}

function Custombutton(props) {
    function onClickHandler(){
        props.setState(props.state+1);
    }
    // return <button onClick={onClickHandler}>Counter {props.state}</button>
    return React.createElement('button',{
        onClick: onClickHandler
    },`Counter ${props.state}`);
}

export default App
