const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/sum', (req, res) => {
    const x = req.query.a;
    const y = req.query.b;
    const product = x * y;
    res.send(product.toString());
})

app.listen(3000);
