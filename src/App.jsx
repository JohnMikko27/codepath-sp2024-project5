import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  // let element = useRoutes([
  //   {path: "/", element: <App/>}
  // ])

  // so the sidebar will always stay
  // the right side is just either Main.jsx or Details.jsx; so maybe put an outlet where Main is currently?
  // in the dashboard with main, each data on the list has a dynamic link that will populate the screen
  // about its details; some of the things in that can be the same; 
  // the only thing that changes probably is the details, so maybe I can use react router or nest components there?
  // maybe only display something on the chart after the user searches up a team
  // maybe we can display their wins and losses after every month?

  // when the user clicks on the link on the list, 
  // (the link should have a corresponding team id so that we can use that to query)
  // we will reroute to the details page but still have the sidebar
  // and just display that team's logo, name, leagues, and other properties on that object

  // when they search up a team on the search bar, we will get the id of that team
  // then we will fetch from the api that team's statistics for the 2023 year
  // and then display on the chart on the right

  // the only thing that seems to be changing in regards to the react routing is Main.jsx and Details.jsx
  return (
    <div className=" h-screen grid grid-cols-5 ">
      
      <Sidebar />
      {/* // this should be an outlet, Main should be a route? and then i need to configure the routes in main.jsx */}
      <Outlet />
    </div>
  );
}

export default App;
