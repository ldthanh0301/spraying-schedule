require('dotenv').config()
const express = require('express')
const Model = require("./models/");
const bodyParser = require('body-parser')

const app = express(); 
const port = 3000; 

const indexRouter = require("./routes/")
app.use(bodyParser.urlencoded({
  extended: true
}));


indexRouter(app)

app.get('/', function(req, res){
  console.log("b: ",req.body)
    res.send("Hello World");
})

app.listen(port, function(){
    console.log("Your app running on port " + port);
})