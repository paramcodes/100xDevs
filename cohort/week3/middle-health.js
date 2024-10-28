import express from "express";

const app = express();

function userMiddleware(req, res, next) {
    if(username !== 'harkirat' || password !== 'paas') {
        res.status(403).json({
            msg:'Incorrect Inputs'
        })
    }else next();
}

function kidneyMiddleware(req, res, next) {
    if(kidneyId != 1 && kidneyId != 2){
        res.status(411).json({
            msg:'wrong inputs'
        })
    }else next();
}

app.get('/health-check', userMiddleware ,kidneyMiddleware,(req, res)=> {
    res.send('Your health is Healthy');
});

app.get('/kidney-check',userMiddleware,kidneyMiddleware,(req, res)=> {
    res.send('Your health is Healthy');
});

app.get('/heart-check',userMiddleware,(req, res)=> {
    res.send('Your health is Healthy');
});

app.listen(3000);