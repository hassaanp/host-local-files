#!/usr/bin/env node
var express = require('express');
var app = express();
var serveIndex = require('serve-index');
// Grab directory name
var directory = process.argv[2];

if (directory == undefined) {
    console.log('Please pass in the directory path');
} else {
    console.log(`Serving files in directory ${directory}`);
    app.use(express.static(directory));
    app.use(serveIndex(directory));
    app.listen(3000);
}