import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    // <div className="  flex flex-col gap-8 m-4 bg-slate-100 p-8 rounded-xl">
    <div className="h-full flex flex-col gap-8 p-8 bg-slate-100">
      
      <Link to="/">
        <h1 className="text-5xl rounded-md hover:underline hover:cursor-pointer">Home</h1>
      </Link>
      <Link to="/about">
        <h1 className="text-3xl rounded-md hover:underline hover:cursor-pointer">About</h1>
      </Link>
      {/* <h2 className="text-3xl rounded-md hover:underline hover:cursor-pointer">Games</h2>
      <h2 className="text-3xl rounded-md hover:underline hover:cursor-pointer">Contact</h2> */}
    </div>
  );
};

export default Sidebar;