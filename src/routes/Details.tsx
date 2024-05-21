import { useLoaderData } from "react-router-dom";

const Details = () => {
  const { response } = useLoaderData();
  console.log(response);
  return (
    <div className="grid items-center justify-items-center col-start-2 col-end-6 bg-white">
      <div className="flex justify-center items-center gap-10 p-2 w-11/12 h-5/6 bg-slate-100 rounded-lg">
        <img className=" w-32" src={response[0].team.logo} alt={response[0].team.name}/>
        <h1 className="text-3xl">{response[0].team.name}</h1>
      </div>
      <div className="grid justify-self-center w-11/12 h-5/6 bg-slate-100 rounded-lg p-8">
        <div className="grid grid-cols-5 font-bold text-xl">
          <div>Season</div>
          <div>Conference</div>
          <div>Rank</div>
          <div>Wins</div>
          <div>Losses</div>
        </div>
        <div className="grid grid-cols-5 text-lg">
          <div>{response[0].season} - {parseInt(response[0].season) + 1}</div>
          <div>{response[0].conference.name[0].toUpperCase() + response[0].conference.name.slice(1)}</div>
          <div>{response[0].conference.rank}</div>
          <div>{response[0].conference.win}</div>
          <div>{response[0].conference.loss}</div>
        </div>
      </div>
     
    </div>
  );
};

export default Details;