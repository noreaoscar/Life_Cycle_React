import logo from "./logo.svg";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";

function App() {
  return (
    <>
      <Route path="/">
        <div className="navBar">
          <h2>This is the navbar</h2>
        </div>
        <hr></hr>

        <ul>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </Route>

      {/* <Route path="/home" >
        <Home name="Oscar" />
      </Route> */}

      {/* <Route 
      path="/home" 
      children={() => <Home name="Oscar" />} 
      /> */}

      <Route exact path="/" component={Home} />
      <Route path="/users">
        <Users />
      </Route>
    </>
  );
}

export default App;
