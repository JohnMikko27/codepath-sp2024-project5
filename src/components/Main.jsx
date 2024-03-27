import { useState, useEffect } from "react";
import Stats from "./Stats";
import TeamListContainer from "./TeamListContainer";

const Main = () => {
  const [east, setEast] = useState([]);
  const [west, setWest] = useState([]);
  const [toggles, setToggles] = useState({east: false, west: false});

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", "891bbdd40e39ebf979dd5dff37b6bb3b");
    myHeaders.append("x-rapidapi-host", "v2.nba.api-sports.io");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    const fetchEast = async() => {
      const response = await fetch("https://v2.nba.api-sports.io/teams?conference=East", requestOptions);
      const data = await response.json();
      console.log(data.response);
      setEast(data.response);
    };
    const fetchWest = async() => {
      const response = await fetch("https://v2.nba.api-sports.io/teams?conference=West", requestOptions);
      const data = await response.json();
      console.log(data.response);
      setWest(data.response);
    };

    // fetchEast();
    // fetchWest();
  }, []);

  const handleChange = (e) => {
    if (e.target.checked) {
      setToggles({...toggles, [e.target.value]: true});
      console.log(`handleChange for ${e.target.value} is now true`);
    } else {
      setToggles({...toggles, [e.target.value]: false});
      console.log(`handleChange for ${e.target.value} is now false`);
    }
  };


  return (
    <div className="bg-slate-50 col-start-2 col-end-6 grid grid-rows-4 h-screen">
      <Stats east={east} west={west}/>
      <TeamListContainer toggles={toggles} handleChange={handleChange} east={east} west={west}/>
    </div>
  );
};

export default Main;