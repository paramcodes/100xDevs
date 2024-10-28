const express = require("express");
const router = require("routes/index");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 3000;

app.use(cors());
app.use('/api/v1',router);

app.listen(PORT,()=> console.log(`App is listening on the port : ${PORT}`));