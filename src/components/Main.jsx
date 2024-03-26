import Stats from "./Stats";
import TeamListContainer from "./TeamListContainer";

const Main = () => {
  return (
    <div className=" col-start-2 col-end-5 grid grid-rows-4">
      <Stats />
      <TeamListContainer />
    </div>
  );
};

export default Main;