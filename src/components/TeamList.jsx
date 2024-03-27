const TeamList = ({ east, west, toggles}) => {
  // if east is toggled, map through east and get its correct info, same with west, and neither, 
  // should i use filter to get the correct items ecah time
  
  // the top should first check if nonnba is true so that i can just map through east and west
  // if it's not checked, then it should just be the nba franchises
  let eastTeams;
  let westTeams;

  if (toggles.east) {
    eastTeams = east.filter(t => t.nbaFranchise);
  }

  if (toggles.west) {
    westTeams = west.filter(t => t.nbaFranchise);
  }

  return (
    <div>
      {toggles.east && eastTeams.map((team ) => {
        return (
          <div key={team.id} className="grid grid-cols-2 justify-items-center items-center">
            <div className="flex items-center gap-4">
              <img className=" w-12 justify-self-end" src={team.logo}/>
              <div>{team.name}</div>
            </div>
            {/* <div>{team.name}</div> */}
            <div>{team.city}</div>
          </div>
        );
      })}

      {toggles.west && westTeams.map((team ) => {
        return (
          <div key={team.id} className="grid grid-cols-2 justify-items-center items-center">
            <div className="flex items-center gap-4">
              <img className=" w-12 justify-self-end" src={team.logo}/>
              <div>{team.name}</div>
            </div>
            {/* <div>{team.name}</div> */}
            <div>{team.city}</div>
          </div>
        );
      })}

    </div>

  );
};

export default TeamList;