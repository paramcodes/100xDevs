import {useCallback, useState} from "react";

export const Assignment2 = () => {
    const [inputBox, setInputBox] = useState('');
    const showAlert = useCallback(()=>{
        alert(inputBox);
    },[inputBox]);
    return (
        <div>
            <input type={'text'} value={inputBox} onChange={(e)=>setInputBox(e.target.value)} placeholder={"Enter some Text"}/>
            <Alert showAlert={showAlert}/>
        </div>
    )
}

function Alert({showAlert}){
    return <button onClick={showAlert}>Show Alert</button>;
}