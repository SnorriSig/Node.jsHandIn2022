// import express
//const app = require("express")();

const express = require("express");
const app = express();

 app.use(express.json());

app.get("/", (req,res) => {
    res.send({ message: "Welcome to my first router"});
});

app.get("/about", (req, res) => {
    res.send({message: "this the about page"})
})

app.post("/", (req, res) => {
    console.log(req.body)
    res.send(req.body);
});

// task create a GET route called about that sends some info about the server
// task implement a POST request handler on the endpoint opinion based on the 
// client data the server sends a response that contains an opinion



app.post("/opinions", (req, res) => {
    console.log(req.body)
    res.send(req.body)

})



// (endpoint callback function)
// task write empty callback funcktion

app.listen(8080);