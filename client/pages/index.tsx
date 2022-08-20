import type { NextPage } from "next";
import { Login } from "../components/login";



const Home: NextPage = () => {

  return (
    <div className="bg-blue-600 h-screen grid items-center justify-items-center">
      <Login></Login>
    </div>
  );
};

export default Home;
