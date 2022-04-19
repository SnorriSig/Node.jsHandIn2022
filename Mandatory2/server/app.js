import express from "express";
const app = express();

import dotenv from 'dotenv'
dotenv.config()

import cors from "cors";
app.use(cors());

//import path from "path"

app.use(express.json())

app.get('/', function (req, res) {
    res.send(`Hello ${process.env.NAME}`)
  })

import path from "path";
app.use(express.static(path.resolve('../client/public')));

import bikesRouter from "./routers/bikesRouter.js";
app.use("/api/bikes", bikesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
});