const TeamList = ({ east, west, toggles, searchedTeam}) => {
  let eastTeams = east.filter(t => t.nbaFranchise && t.name !== "Home Team Stephen A");
  let westTeams = west.filter(t => t.nbaFranchise);

  let team = east.filter(t => t.name === searchedTeam);
  if (team.length === 0) {
    team = west.filter(t => t.name === searchedTeam);
  }
  console.log(team);

  return (
    <div className=" rounded-xl ">
      <div className="grid grid-cols-2 justify-items-center my-6">
        <h1 className="font-bold text-xl">Team Name</h1>
        <h1 className="font-bold text-xl">City</h1>
      </div>
      
      {toggles.east && eastTeams.map((team ) => {
        return (
          <div key={team.id} className="grid grid-cols-2 justify-items-center items-center mb-8">
            <div className="flex items-center gap-4 justify-self-start ">
              <img className=" w-12 ml-20" src={team.logo}/>
              <div className="justify-self-start">{team.name}</div>
            </div>
            <div>{team.city}</div>
          </div>
        );
      })}
      
      {toggles.west && westTeams.map((team ) => {
        return (
          <div key={team.id} className="grid grid-cols-2 justify-items-center items-center mb-8">
            <div className="flex items-center gap-4 justify-self-start ">
              <img className=" w-12 ml-20" src={team.logo}/>
              <div className="justify-self-start">{team.name}</div>
            </div>
            <div>{team.city}</div>
          </div>
        );
      })}
      {/* {console.log(team)} */}
      {team.length !== 0
        ? 
        <div className="grid grid-cols-2 justify-items-center items-center mb-8">
          <div className="flex items-center gap-4 justify-self-start ">
            <img className=" w-12 ml-20" src={team[0].logo}/>
            <div className="justify-self-start">{team[0].name}</div>
          </div>
          <div>{team[0].city}</div>
        </div> 
        : <div className="text-center">Please make sure you typed in the correct team name. E.g. Golden State Warriors</div>
      }
      
    </div>
  );
};

export default TeamList;