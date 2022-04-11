import express from "express";
const app = express();

app.use(express.json())

// import cors from "cors";
// app.use(cors());

import path from "path";
app.use(express.static(path.resolve('../client/public')));

import bikesRouter from "./routers/bikesRouter.js";
app.use("/api/bikes", bikesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
});