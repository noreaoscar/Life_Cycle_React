import "./App.css";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import characters, { Rick } from "./data.js";
import Nav from "./components/Nav.jsx";

function App() {
  return (
    <div className="App">
      <div>
        <Nav />
      </div>

      <div>
        <Cards characters={characters} />
      </div>
    </div>
  );
}

export default App;
