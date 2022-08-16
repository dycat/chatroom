const express = require('express');
const {Server} = require('socket.io');

const app = express();
const http = require('http');
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://127.0.0.1:3002"
    }
});

const PORT = 3001;

io.on('connection', (socket) => {
    console.log('a user connected');
})

server.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
})