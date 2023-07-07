require('dotenv').config()
const express = require('express')
const Model = require("./models/");
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express(); 
const port = 3001; 

const indexRouter = require("./routes/")

app.use(cors())
app.use(express.json());
app.use(express.urlencoded());

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json({ type: 'application/*+json' }));

indexRouter(app)

app.get('/', function(req, res){
  console.log("b: ",req.body)
    res.send("Hello World");
})
app.post('/', function(req, res){
  console.log("b: ",req.body)
    res.send("Hello World");
})
app.listen(port, function(){
    console.log("Your app running on port " + port);
})