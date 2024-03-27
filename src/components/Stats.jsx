const Stats = ({ east, west}) => {
  return (
    <div>
      {/* remember that the lengths are wrong bc they add non-nba teams as well */}
      <div>{east.length} / {east.length + west.length}</div>
      <div>{west.length} / {east.length + west.length}</div>

    </div>
  );
};

export default Stats;