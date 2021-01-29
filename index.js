/*
const http = require('http');


const handleServer = function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write('<h1>Hola Mundo</h1>');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function () {
    console.log('Server on port 3000'.yellow)
})

*/

const colors = require ('colors')
const express = require('express')

const  server = express();

server.get('/', function (req, res) {
    res.send('<h1>Hola Mundo con express y nodejs</h1>');
    res.end();
})

server.listen(3000, function () {
    console.log('Server on port 3000'.red)
})