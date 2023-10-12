import "./App.css";
import NavBar from "./components/NavBar";
import CharacterList from "./components/CharacterList";
import CharacterDetails from "./components/CharacterDetails";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //NOTE fetch
  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch("https://rickandmortyapi.com/api/character")
  //     .then((res) => {
  //       if (!res.ok) throw new Error("there was an error fetching!");

  //       return res.json();
  //     })
  //     .then((data) => {
  //       setCharacters(data.results.slice(0, 5));
  //     })
  //     .catch((err) => {
  //       toast.error(err.message);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);

  //NOTE fetch
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       setIsLoading(true);
  //       const res = await fetch("https://rickandmortyapi.com/api/character");
  //       if (!res.ok) throw new Error("there was an error fetching!");
  //       const data = await res.json();
  //       setCharacters(data.results.slice(0, 5));
  //     } catch (error) {
  //       toast.error(error.message)
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchData();
  // }, []);

  //NOTE Axios Async
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       setIsLoading(true);
  //       const {data} = await axios.get("https://rickandmortyapi.com/api/character");

  //       // console.log(res);
  //       setCharacters(data.results.slice(0, 5));
  //     } catch (error) {
  //       toast.error(error.message)
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchData();
  // }, []);

  //NOTE - Axios Promise
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(({ data }) => {
        setCharacters(data.results.slice(0, 5));
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="app">
      <Toaster position="top-right" reverseOrder={false} />
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
