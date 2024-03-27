import { useState, useEffect } from "react";
import Stats from "./Stats";
import TeamListContainer from "./TeamListContainer";

const Main = () => {
  const [east, setEast] = useState([]);
  const [west, setWest] = useState([]);
  const [toggles, setToggles] = useState({east: true, west: true, neither: true});


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
      // console.log(data);
      console.log(data.response);
      // setTeams(t => ([...t, ...data.response]));
      setEast(data.response);
    };

    const fetchWest = async() => {
      const response = await fetch("https://v2.nba.api-sports.io/teams?conference=West", requestOptions);
      const data = await response.json();
      // console.log(data);
      console.log(data.response);
      // setTeams(t => ([...t, ...data.response]));
      setWest(data.response);
    };
    // fetchEast();
    // fetchWest();
    
  }, []);


  return (
    <div className=" col-start-2 col-end-5 grid grid-rows-4 border-black border-2 border-solid">
      <Stats east={east} west={west}/>
      <TeamListContainer east={east} west={west}/>
      {console.log(east)}
      {console.log(west)}
    </div>
  );
};

export default Main;