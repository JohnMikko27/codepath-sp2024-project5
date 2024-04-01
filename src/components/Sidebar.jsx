const Sidebar = () => {
  return (
    <div className="  flex flex-col gap-8 p-8 ">
      <h1 className="text-5xl rounded-md hover:underline hover:cursor-pointer">Home</h1>
      <h2 className="text-3xl rounded-md hover:underline hover:cursor-pointer">About</h2>
      <h2 className="text-3xl rounded-md hover:underline hover:cursor-pointer">Games</h2>
      <h2 className="text-3xl rounded-md hover:underline hover:cursor-pointer">Contact</h2>
    </div>
  );
};

export default Sidebar;