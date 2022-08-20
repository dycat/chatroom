import Link from "next/link";
import { Bubble } from "../components/bubble";

export default function Chatroom(): JSX.Element {
  return (
    <div className="h-screen bg-blue-900 grid items-center justify-items-center">
      <div className="h-2/3 w-2/3 bg-white rounded-xl flex flex-col ">
        <h2 className="text-center bg-gray-50 rounded-t-xl h-8 font-black">Chat room: Dev</h2>
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
            <Link href={"/"}><p className="ml-8 mb-4 w-16 h-8 bg-red-50 text-center rounded-lg items-center text-red-600">Back</p></Link>
          </div>
          <div className="w-5/6 flex flex-col">
            {/* display */}
          <div className="w-full flex-grow bg-gray-50">
            <Bubble message={{
                content: "Hello there",
                user: "John",
                time: "10:31 PM"
              }}></Bubble>
            <Bubble message={{
                content: "Welcome.",
                user: "Sim",
                time: "10:32 PM"
              }}></Bubble>
          </div>
          <div className="h-12" >
          <input type="text" id="" placeholder="Input text here ..." className="h-full w-5/6 outline-none" />
          <button className="h-full w-1/6 bg-red-600 rounded-br-xl active:bg-red-900 font-bold text-white">Send</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
