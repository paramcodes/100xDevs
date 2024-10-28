let now = 0;
setInterval(()=>{
    process.stdout.write(`${now}\r`);
    now++;
},1000);