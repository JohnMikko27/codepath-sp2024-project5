import TeamList from "./TeamList";

const TeamListContainer = ({ east, west, handleChange, toggles}) => {
    
  return (
    <div className=" py-6 bg-slate-100 rounded-lg row-start-2 row-end-5 overflow-y-auto">
      <div className="flex justify-center flex-1 gap-12">
        <div className="flex gap-4 justify-center items-center">
          <input type="checkbox" id="east" value="east" onChange={handleChange} className=""/>
          <label htmlFor="east" className=" text-2xl">East</label>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <input type="checkbox" id="west" value="west" onChange={handleChange}/>
          <label htmlFor="west" className=" text-2xl">West</label>
        </div>
        
      </div>
      <TeamList toggles={toggles} east={east} west={west}/>
    </div>
  );
};

export default TeamListContainer;