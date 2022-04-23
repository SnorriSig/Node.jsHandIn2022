import express from "express";
import dotenv from 'dotenv'
import cors from "cors";
import path from "path";
import bikesRouter from "./routers/bikesRouter.js";

const app = express();
app.use(express.json())

dotenv.config()

app.use(cors());

app.use(express.static(path.resolve('../client/public')));

app.use("/api/bikes", bikesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
});

// app.get('/', function (req, res) {
//     res.send(`Hello ${process.env.NAME}`)
//   })