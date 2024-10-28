const express = require('express');

const app = express();

app.get('/health-checkup', (req, res) => {
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;
    if(username !== 'harkirat' || password !== 'pass') {
        res.status(403).json({
            msg:'User doesnt exist'
        });
        return;
    }

    if(kidneyId !== 1 && kidneyId !== 2){
        res.status(411).json({
            msg:'wrong inputs'
        });
        return;
    }
    res.send('Your heart is Healthy');
})

app.put('/replace-kidney', (req, res) => {
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;
    if(username !== 'harkirat' || password !== 'pass') {
        res.status(403).json({
            msg:'User doesnt exist'
        });
        return;
    }

    if(kidneyId !== 1 && kidneyId !== 2){
        res.status(411).json({
            msg:'wrong inputs'
        });
        return;
    }
    res.send('Your heart is Healthy');
})

const port = process.env.PORT || 3000;
app.listen(port);