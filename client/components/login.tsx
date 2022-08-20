import Link from "next/link";

export function Login(): JSX.Element {
  return (
    <div className="h-96 w-96 bg-slate-200 grid rounded-3xl justify-items-center">
      <h1 className="font-sans text-4xl font-black pt-4 text-center">
        Chatroom
      </h1>
      <div className="grid grid-flow-col gap-4">
        <label>Name</label>
        <input type="text" className="w-44 h-8 outline-none"></input>
      </div>

      <div className="grid grid-flow-col gap-4">
        <label>Room</label>
        {/* <input type="text" id="" className="w-44 h-8" /> */}
        <select value="room" className="w-44 h-8">
          <option value="food_recipe">Food Recipe</option>
          <option value="coding">Coding</option>
          <option value="writing">Writing</option>
        </select>
      </div>

      <Link href={"chatroom"}>
        <button className="w-40 h-12 bg-blue-800 rounded-xl text-white text-xl font-bold">
          Login
        </button>
      </Link>
    </div>
  );
}
