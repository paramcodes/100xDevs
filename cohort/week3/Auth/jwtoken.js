const jwt = require('jsonwebtoken');

const value = {
    name:'Harkirat',
    accountNumber:12313241
}

const token = jwt.sign(value,'secret');
console.log(token);