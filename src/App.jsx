import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  
  return (
    <div className="h-screen grid grid-cols-5 bg-slate-100">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
