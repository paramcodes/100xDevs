export const Random = ()=>{
    return <div>
        <h2 id={"change"}></h2>
        <button onClick={randomChange}>Click ME</button>
    </div>
}

function randomChange(){
    document.getElementById('change').innerHTML = Math.random();
}