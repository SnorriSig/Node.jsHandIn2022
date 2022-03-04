const path = require("path");
const express = require("express");
const app = express()
const fs = require("fs");

app.use(express.static("public"));

const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();

app.get("/", (req, res) => {
    res.send(frontpage);
});

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
    console.log("Server is running on port", server.address().port);
})