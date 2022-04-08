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
const footer = fs.readFileSync("./public/components/footer.html").toString();

const commandLinePage = nav.replaceAll("%%DOCUMENT_TITLE%%", "Command-line") + commandLine + footer;
const javaScriptPage = nav.replaceAll("%%DOCUMENT_TITLE%%", "JavaScript") + javaScript;
const restApiPage = nav.replaceAll("%%DOCUMENT_TITLE%%", "REST API") + restApi;
const nodeJsPage = nav.replaceAll("%%DOCUMENT_TITLE%%", "Node.js") + nodeJs;
const packageJsonPage = nav.replaceAll("%%DOCUMENT_TITLE%%", "Package.json") + packageJson;
const expressModulePage = nav.replaceAll("%%DOCUMENT_TITLE%%", "Express") + expressModule;
const nodemonPage = nav.replaceAll("%%DOCUMENT_TITLE%%", "Nodemon") + nodemon;

app.get("/", (req, res) => {
    res.send(frontpage);
});

app.get("/commandline", (req,res)=>{
    res.send(commandLinePage);
});

app.get("/javascript", (req,res)=>{
    res.send(javaScriptPage);
});

app.get("/restapi", (req,res)=>{
    res.send(restApiPage);
});

app.get("/nodejs", (req,res)=>{
    res.send(nodeJsPage);
});

app.get("/packagejson", (req,res)=>{
    res.send(packageJsonPage);
});

app.get("/express", (req,res)=>{
    res.send(expressModulePage);
});

app.get("/nodemon", (req,res)=>{
    res.send(nodemonPage);
});

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
    console.log("Server is running on port", server.address().port);
});