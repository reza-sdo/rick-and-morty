import "./App.css";
import NavBar from "./components/NavBar";
import CharacterList from "./components/CharacterList";
import CharacterDetails from "./components/CharacterDetails";
import { allCharacters } from "../data/data";
import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results.slice(0, 5)));
    setIsLoading(false);
  }, []);
  // useEffect(()=>{

  //   async function fetchData(){
  //     setIsLoading(true)
  //     const res = await fetch("https://rickandmortyapi.com/api/character")
  //     const data = await res.json();
  //     setCharacters(data.results.slice(0,5))
  //     setIsLoading(false)
  //   }
  //   fetchData()
  // } , [])

  return (
    <div className="app">
      <NavBar numOfResult={characters.length} />
      <Main>
        <CharacterList characters={characters} isLoading={isLoading} />
        <CharacterDetails />
      </Main>
    </div>
  );
}

export default App;

function Main({ children }) {
  return <div className="main">{children}</div>;
}
