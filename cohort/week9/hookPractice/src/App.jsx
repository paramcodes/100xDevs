import './App.css'
import React, {useEffect, useState} from "react";

function App() {
    const [render,setRender] = useState(true);
    useEffect(() => {
        setTimeout(()=>{
            // setRender(false);
            setRender(r => !r);
        },2000)
    })
  return (
    <>
        {/*<MyComponent/>*/}
        {/*<OurComponent/>*/}
        {/*{render ? <MyyComponent/> : null}*/}
        {render ? <MMyComponent/> : null}
    </>
  )
}

function MyComponent() {
    const [count,setCount] = useState(0);

    const incrementCount = () => {
        setCount(count+1);
    };

    return (
        <div>
            <p>{count}</p>
            <button onClick={incrementCount}>Increment</button>
        </div>
    )
}

class OurComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {count:0};
    }

    incrementCount = () =>{
        this.setState({count:this.state.count + 1});
    }

    render(){
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.incrementCount}>Increment</button>
            </div>
        );
    }
}

function MyyComponent(){
    useEffect(() => {
            console.error("component mounted");
        return () => {
            console.log("component unmounted");
        }
    }, []);
    return <div>
        From inside the Component
    </div>
}

class MMyComponent extends React.Component{
    componentDidMount(){
        console.log("component mounted");
    }
    componentWillUnmount() {
        console.log("component unmounted");
    }
    render(){
        return <div>
            hii  there
        </div>
    }
}

export default App
