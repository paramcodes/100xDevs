const express = require('express');

const app = express();

function isOldEnough(age){
    return age > 13;
}

function isOldEnoughMiddleWare(req, res, next){
    const age = req.query.age;
    if(age >= 14)next();
    else{
        res.json({
            msg:'Sorry you are not of age yet'
        })
    }
}

app.get('/ride1',isOldEnoughMiddleWare,(req, res) => {
    if(isOldEnough(req.query.age)){
        res.json({
            msg: 'You have successfully riden the ride 1'
        })
    }else{
        res.status(411).json({
            msg:'Sorry you are not of eligible age yet'
        })
    }
})

app.get('/ride2',isOldEnoughMiddleWare,(req,res,next)=>{
    if(isOldEnough(req.query.age)){
        res.json({
            msg:'You have successfully riden the ride 2'
        })
    }else{
        res.status(411).json({
            msg:'Sorry you are not of eligible age yet'
        })
    }
})

app.listen(3000);