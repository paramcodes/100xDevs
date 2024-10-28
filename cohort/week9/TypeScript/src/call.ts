function Call(fn:Function) {
    return setTimeout(fn,5000);
}

function greet(){
    console.log("Hello hardhat!");
}

Call(greet);