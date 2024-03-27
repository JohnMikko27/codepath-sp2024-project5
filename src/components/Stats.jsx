const Stats = ({ east, west}) => {
  return (
    <div className="grid grid-cols-3 justify-items-center items-center text-xl">
      <div># of East teams: 15</div>
      <div># of West teams: 15</div>
      <div># of Non-NBA teams (in this api): 8</div>
    </div>
  );
};

export default Stats;