import "./App.css";
import NavBar, { SearchResult, Search, Favorites } from "./components/NavBar";
import CharacterList from "./components/CharacterList";
import CharacterDetails from "./components/CharacterDetails";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [fave, setFave] = useState([]);
  // const [time, setTime] = useState(0);

  //NOTE Axios Async
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character?name=${query}`,
          { signal }
        );

        setCharacters(data.results);
      } catch (err) {
       
        if (!axios.isCancel()) {
          
          setCharacters([]);
          toast.error(err.response.data.error);
        }
      } finally {
        setIsLoading(false);
      }
    }
    // if(query.length < 3){
    //   return
    // }


 



    fetchData();

    return () => {
      controller.abort();
    };
  }, [query]);

  const handleSelectCharacter = (id) => {
    setSelectedId((perv) => (perv === id ? null : id));
  };
  const handleFave = (i) => {
    setFave((pre) => [...pre, i]);
  };
  const isFavIN = fave.map((i) => i.id).includes(selectedId);

  // useEffect(() => {
  //   const aa = setInterval(() => setTime((pre) => pre + 1), 1000);
  //   return () => clearInterval(aa);
  // }, [time]);

  return (
    <div className="app">
      {/* <div style={{ color: "#fff" }}>{time}</div> */}
      <Toaster position="top-right" reverseOrder={false} />
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <SearchResult numOfResult={characters.length} />
        <Favorites fave={fave} />
      </NavBar>
      <Main>
        <CharacterList
          onSelectCharacter={handleSelectCharacter}
          characters={characters}
          isLoading={isLoading}
          selectedId={selectedId}
        />
        <CharacterDetails
          isFavIN={isFavIN}
          onAddFave={handleFave}
          selectedId={selectedId}
        />
      </Main>
    </div>
  );
}

export default App;

function Main({ children }) {
  return <div className="main">{children}</div>;
}

//NOTE - Axios Promise
// useEffect(() => {
//   setIsLoading(true);
//   axios
//     .get(`https://rickandmortyapi.com/api/character?name=${query}`)
//     .then(({ data }) => {
//       setCharacters(data.results.slice(0, 5));
//     })
//     .catch((err) => {
//       // setCharacters([])
//       toast.error(err.message);
//     })
//     .finally(() => {
//       setIsLoading(false);
//     });
// }, [query]);

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
