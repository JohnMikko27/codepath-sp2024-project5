import TeamList from "./TeamList";

const TeamListContainer = ({ 
  east, west, handleChange, toggles, 
  handleSearch, input, handleSubmit, searchedTeam}) => {
    
  return (
    <div className=" py-6 bg-slate-100 rounded-lg row-start-2 row-end-5 overflow-y-auto">
      <div className="flex justify-center flex-1 items-center gap-12">
        <form onSubmit={handleSubmit}>
          <input type="text" value={input} onChange={handleSearch} placeholder="Search team"/>
        </form>
        <div className="flex gap-4 justify-center items-center">
          <input type="checkbox" id="east" value="east" onChange={handleChange} />
          <label htmlFor="east" className=" text-2xl">East</label>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <input type="checkbox" id="west" value="west" onChange={handleChange}/>
          <label htmlFor="west" className=" text-2xl">West</label>
        </div>
        
      </div>
      <TeamList toggles={toggles} east={east} west={west} searchedTeam={searchedTeam}/>
    </div>
  );
};

export default TeamListContainer;