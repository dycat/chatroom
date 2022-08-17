import type { NextPage } from "next";
import { useEffect } from "react";
import { io, Socket } from "socket.io-client";
import { Login } from "../components/login";

const socket: Socket = io("http://127.0.0.1:3001");

const Home: NextPage = () => {
  useEffect(() => {
    socket.on("connection", () => {});
  }, []);

  return (
    <div>
      <Login></Login>
    </div>
  );
};

export default Home;