const express = require("express");
const { Server } = require("socket.io");

const app = express();
const http = require("http");
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ['*',"http://127.0.0.1:3002", "http://0.0.0.0:3002", "http://10.0.0.9"],
  },
});

const PORT = 3001;
const HOSTNAME = "0.0.0.0"

io.on("connection", (socket) => {
//   console.log(io.of("/chatroom").adapter)
  socket.on("joinRoom", () => {
    console.log(`A user joined room. socket id: ${socket.id}`);

    socket.emit("message", formatMsg("Welcome new friend.", "Bot"));
  });

  socket.on("message", (message, user, room) => {
    // console.log(`A new Msg: ${message}`);
    socket.emit("message", formatMsg(message, user) );
  });

  socket.on("disconnect", () => {
    console.log(`A user disconnected. socket id: ${socket.id}`);
  });
});

server.listen(PORT, HOSTNAME,() => {
  console.log(`listening on port: ${PORT}`);
});

function formatMsg(message, user){
    const date = new Date().toLocaleTimeString()
    return {message: message, user: user, date: date} 
}