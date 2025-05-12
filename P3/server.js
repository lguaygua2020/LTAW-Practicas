const socket = require('socket.io');
const http = require('http');
const express = require('express');
const colors = require('colors');

//-- Puerto de escucha del servidor
const PUERTO = 9090;

//--  nueva aplicación web
const app = express();

//-- servidor, asociado a la App de express
const server = http.Server(app);

//--  servidor de websockets, asociado al servidor http
const io = socket(server);