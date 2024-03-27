import TeamList from "./TeamList";

const TeamListContainer = ({ east, west, handleChange, toggles}) => {
    
  return (
    <div className="row-start-2 row-end-5 overflow-y-auto">
      <div className="flex justify-center flex-1 gap-8">
        <div>
          <label htmlFor="east">East</label>
          <input type="checkbox" id="east" value="east" onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="west">West</label>
          <input type="checkbox" id="west" value="west" onChange={handleChange}/>
        </div>
        
      </div>
      <TeamList toggles={toggles} east={east} west={west}/>
    </div>
  );
};

export default TeamListContainer;