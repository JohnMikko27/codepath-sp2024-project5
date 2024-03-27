import { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import "./App.css";

function App() {

  return (
    <div className=" h-screen grid grid-cols-4 ">
      <Sidebar />
      <Main/>
    </div>
  );
}

export default App;
