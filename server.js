const express=require("express")
const app=express()
const bodyParser =require("body-parser")
var empRouter=require("./emps.js")

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.json())
app.use('/emps',empRouter)


app.listen(9898,'0.0.0.0',()=>{
    console.log("Server started at 9898...");
})