import {allCharacters} from "../data/data";
import "./App.css";
import NavBar from "./components/NavBar";
import CharacterList from "./components/CharacterList";
import CharacterDetails from "./components/CharacterDetails";


function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="main">
        <CharacterList/>
        <CharacterDetails />
      </div>
    </div>
  );
}

export default App;
