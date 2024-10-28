const express = require('express');

const app = express();

let numberOfRequests = 0;

function calculateRequests(req, res,next) {
    numberOfRequests++;
    console.log(numberOfRequests);
    next();
}

app.use(calculateRequests);
app.use(express.json());

app.post('/health-checkup', function(req, res) {
    res.json({
        msg:'hi there'
    })
});

app.listen(3000);