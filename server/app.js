#!/usr/bin/env nodejs
const express = require('express');
const path = require('path');
const app = express();

app.set("port", process.env.PORT || 4000);

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "/public", "/assets/views/index.html"));
});

app.get('/*', function(req, res){
    res.redirect('/')
});

app.listen(app.get("port"), function(){
    console.log("Listening on port: ", app.get("port"));
});