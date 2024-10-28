const express = require('express');

const app = express();

let numberofRequestsforUser = {};

setInterval(()=>{
    numberofRequestsforUser = {}
},1000)

app.user(function (req,res,next){
    // numberofRequestsforUser[req.headers['user-id']] = numberofRequestsforUser[req.headers['user-id']]++;
    const userID = req.headers['user-id'];
    if(numberofRequestsforUser[userID]){
        numberofRequestsforUser[userID]++;
        if(numberofRequestsforUser[userID] > 5){
            res.status(404).send('No Entry');
        }else next();
    }else {
        numberofRequestsforUser[userID] = 1;
        next();
    }
})

app.get('/user', (req,res)=>{
    res.status(200).json({name: 'john'});
})

app.post('/user', (req,res)=>{
    res.status(200).json({
        msg:"created dummy user"
    })
})