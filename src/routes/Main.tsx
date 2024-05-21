import { useState, useEffect } from "react";
import Stats from "../components/Stats";
import TeamListContainer from "../components/TeamListContainer";
import Chart from "../components/Chart";

const Main = () => {
  const [east, setEast] = useState([]);
  const [west, setWest] = useState([]);
  const [toggles, setToggles] = useState({east: false, west: false});
  const [input, setInput] = useState("");
  const [searchedTeam, setSearchedTeam] = useState("");

  const key = import.meta.env.VITE_APP_API_KEY;

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", key);
    myHeaders.append("x-rapidapi-host", "v2.nba.api-sports.io");

    const requestOptions: RequestInit = {
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

    fetchEast();
    fetchWest();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setToggles({...toggles, [e.target.value]: true});
      console.log(`handleChange for ${e.target.value} is now true`);
    } else {
      setToggles({...toggles, [e.target.value]: false});
      console.log(`handleChange for ${e.target.value} is now false`);
    }
    setSearchedTeam("");
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    console.log(input);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // toggling them off, so that the only the searched team is shown
    setToggles({east: false, west: false});
    setSearchedTeam(input);
    setInput("");
  };

  return (
    <div className="col-start-2 col-end-6 grid grid-rows-1 gap-4 h-screen bg-white pl-4 mb-2">
      <Stats/>
      <div className="grid grid-cols-3">
        <TeamListContainer searchedTeam={searchedTeam} handleSubmit={handleSubmit} input={input} handleSearch={handleSearch} toggles={toggles} handleChange={handleChange} east={east} west={west}/>
        <div className="col-start-3 col-end-4 grid">
          <div className="grid justify-items-center">
            <div className=" text-lg">East Standings</div>
            <Chart conference="east"/>
          </div>
          <div className="grid justify-items-center">
            <div className="text-lg">West Standings</div>
            <Chart conference="west"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;