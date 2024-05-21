import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const Chart = ({conference}: {conference: String}) => {
  const [standings, setStandings] = useState();

  useEffect(() => {
    const fetchData = async() => {  
      const response = await fetch(`https://v2.nba.api-sports.io/standings?conference=${conference}&league=standard&season=2023`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "v2.nba.api-sports.io",
          "x-rapidapi-key": "891bbdd40e39ebf979dd5dff37b6bb3b"
        }});
      const data = await response.json();
      console.log(data);
      const info = data.response.map((team: any) => ({
        code: team.team.name,
        wins: team.win.total,
        losses: team.loss.total,
      }));
      setStandings(info);
    };

    fetchData();

  }, []);

  return (
    <BarChart
      width={350}
      height={300}
      data={standings}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="code" hide={true}/>
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="wins" fill="#90EE90" />
      <Bar dataKey="losses" fill="#ff7f7f" />
      {console.log(standings)}
    </BarChart>
  );
};

export default Chart;
