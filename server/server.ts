import { Socket } from "socket.io";
import {
  User,
  addUser,
  getRoomUsers,
  removeUser,
  isUserExist,
} from "./libs/user";

const express = require("express");
const { Server } = require("socket.io");

const app = express();
const http = require("http");
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://127.0.0.1:3002"],
  },
});

const PORT = 3001;
const HOSTNAME = "0.0.0.0";

io.on("connection", (socket: Socket) => {
  //   console.log(io.of("/chatroom").adapter)
  socket.on("joinRoom", ({ user, room }) => {
    console.log(`A user joined room. socket id: ${socket.id}`);
    console.log(isUserExist(user));

    if (isUserExist(user)) {
    } else {
      let newUser: User = {
        username: user,
        room: room,
        id: socket.id,
      };
      
      addUser(newUser);

      socket.join(newUser.room);

      socket.emit("message", formatMsg("Welcome new friend.", "Bot"));

      const roomUsers = getRoomUsers(newUser.room);

      io.to(newUser.room).emit("roomUsers", {
        users: roomUsers,
      });
    }
  });

  socket.on("message", (message, user, room) => {
    const formattedMsg = formatMsg(message, user);
    // console.log(`A new Msg: ${message}`);
    socket.emit("message", formattedMsg);

    // broadcast to other users in the room
    socket.broadcast.to(room).emit("message", formattedMsg);
  });

  socket.on("disconnect", () => {
    console.log(`A user disconnected. socket id: ${socket.id}`);
  });
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`listening on port: ${PORT}`);
});

function formatMsg(message: string, user: string) {
  const date = new Date().toLocaleTimeString();
  return { message: message, user: user, date: date };
}
