import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import "./App.css";

function App() {
  const [data, setData] = useState(0);

  useEffect(() => {
    const fetchData = async() => {
      const myHeaders = new Headers();
      myHeaders.append("x-rapidapi-key", "891bbdd40e39ebf979dd5dff37b6bb3b");
      myHeaders.append("x-rapidapi-host", "v2.nba.api-sports.io");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
      };

      const response = await fetch("https://v2.nba.api-sports.io/teams", requestOptions);
      const data = await response.json();
      console.log(data);
      console.log(data.response);
      setData(data.response);
    };
    fetchData();
  }, []);

  return (
    <div className=" h-screen grid grid-cols-4 ">
      <Sidebar />
      <Main/>
    </div>
  );
}

export default App;
