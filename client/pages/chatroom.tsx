import Link from "next/link";
import { Bubble } from "../components/bubble";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import { Message } from "../utils/messege";
import { useRouter } from "next/router";

const socket = io("http://127.0.0.1:3001");

export default function Chatroom(): JSX.Element {
  const [messages, setMessages] = useState<Message[]>([]);
  const [msgInput, setMsgInput] = useState("");
  const router = useRouter()
  const {user, room} = router.query
  
  useEffect(() => {
    socket.emit("joinRoom", {user, room});
     
    
    return () => {
      socket.off("joinRoom");
    };
  }, []);

  useEffect(() => {
    socket.on("message", ({ message, user, date }) => {
      const newMessage: Message = {
        content: message,
        user: user,
        time: date,
      };

      setMessages([...messages, newMessage]);
    });
    return () => {
      socket.off("message");
    };

  }, [messages])

  const handleInputMsg = (e) => {
    setMsgInput(e.target.value);
  };

  const handleSendMsg = () => {
    socket.emit("message",  msgInput, user, room);
    setMsgInput("");
    console.log(`Message sent: ${msgInput}`);
  };

  return (
    <div className="h-screen bg-blue-900 grid items-center justify-items-center">
      <div className="h-2/3 w-2/3 bg-white rounded-xl flex flex-col ">
        <h2 className="text-center bg-gray-50 rounded-t-xl h-8 font-black">
          Chat room: {room}
        </h2>
        <div className="flex flex-grow">
          <div className="flex flex-col w-1/6">
            <ul className="flex-grow">
              <li className="text-blue-900 font-bold pl-2">Members</li>
              <ul className="text-indigo-900 pl-4">
                <li>John</li>
                <li>Anne</li>
                <li>Sam</li>
              </ul>
            </ul>
            <Link href={"/"}>
              <p className="ml-8 mb-4 w-16 h-8 bg-red-50 text-center rounded-lg items-center text-red-600">
                Back
              </p>
            </Link>
          </div>
          <div className="w-5/6 flex flex-col">
            {/* display */}
            <div className="w-full flex-grow h-56 bg-gray-50 overflow-y-auto">
              {messages.map((message, index) => (
                <Bubble
                  key={index}
                  message={{
                    content: message.content,
                    user: message.user,
                    time: message.time,
                  }}
                ></Bubble>
              ))}
            </div>
            <div className="h-12">
              <input
                type="text"
                id=""
                placeholder="Input text here ..."
                className="h-full w-5/6 outline-none"
                onChange={handleInputMsg}
                value={msgInput}
              />
              <button
                onClick={handleSendMsg}
                className="h-full w-1/6 bg-red-600 rounded-br-xl active:bg-red-900 font-bold text-white"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
