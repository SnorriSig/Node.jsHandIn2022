const path = require("path");
const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.static("public"));

const nav = fs.readFileSync("./public/components/nav.html").toString();

const frontpage = fs.readFileSync("./public/pages/0._frontpage.html").toString();
const commandLine = fs.readFileSync("./public/pages/1._commandLine.html").toString();
const javaScript = fs.readFileSync("./public/pages/2._javascript.html").toString();
const restApi = fs.readFileSync("./public/pages/3._restApi.html").toString();
const nodeJs = fs.readFileSync("./public/pages/4._nodeJs.html").toString();
const packageJson = fs.readFileSync("./public/pages/5._packageJson.html").toString();
const expressModule = fs.readFileSync("./public/pages/6._express.html").toString();
const nodemon = fs.readFileSync("./public/pages/7._nodemon.html").toString();

// const commandLinePage = nav.replace("%%DOCUMENT_TITLE%%", "Command-line") + commandLine;
// const javaScriptPage = nav.replace("%%DOCUMENT_TITLE%%", "JavaScript") + javaScript;
// const restApiPage = nav.replace("%%DOCUMENT_TITLE%%", "REST API") + restApi;
// const nodeJsPage = nav.replace("%%DOCUMENT_TITLE%%", "JavaScript") + nodeJs;
// const packageJsonPage = nav.replace("%%DOCUMENT_TITLE%%", "JavaScript") + packageJson;
// const expressModulePage = nav.replace("%%DOCUMENT_TITLE%%", "JavaScript") + expressModule;
// const nodemonPage = nav.replace("%%DOCUMENT_TITLE%%", "JavaScript") + nodemon;

app.get("/", (req, res) => {
    res.send(frontpage);
});

app.get("/commandline", (req,res)=>{
    res.send(nav + commandLine);
});

app.get("/javascript", (req,res)=>{
    res.send(nav + javaScript);
});

app.get("/restapi", (req,res)=>{
    res.send(nav + restApi);
});

app.get("/nodejs", (req,res)=>{
    res.send(nav + nodeJs);
});

app.get("/packagejson", (req,res)=>{
    res.send(nav + packageJson);
});

app.get("/express", (req,res)=>{
    res.send(nav + expressModule);
});

app.get("/nodemon", (req,res)=>{
    res.send(nav + nodemon);
});

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
    console.log("Server is running on port", server.address().port);
});