require('dotenv').config()
const express = require('express');
const app = express();
require("./db/conn")
var bodyParser = require('body-parser')
const port = process.env.PORT || 5000;

app.use(express.json());

app.use(bodyParser.json())

app.use(require('./router/router'))


// 3: setup in heroku 
if (process.env.NODE_ENV === 'production') {
    app.use(express.static("my-app/build"))
}


app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})