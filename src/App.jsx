import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import "./App.css";

function App() {

  return (
    <div className=" h-screen grid grid-cols-5 ">
      <Sidebar />
      <Main/>
    </div>
  );
}

export default App;
