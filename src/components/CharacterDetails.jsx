import { useEffect, useState } from "react";

import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "./Loader";
function CharacterDetails({ selectedId, onAddFave, isFavIN }) {
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [episodes, setEpi] = useState([]);
  useEffect(() => {
    async function fetchCharacter() {
      try {
        setIsLoading(true);
        setCharacter(null);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/${selectedId}`
        );
        setCharacter(data);
        const episodesId = data.episode.map((e) => e.split("/").at(-1));
        const { data: epiData } = await axios.get(
          `https://rickandmortyapi.com/api/episode/${episodesId}`
        );

        setEpi([epiData].flat());
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (selectedId) fetchCharacter();
  }, [selectedId]);

  if (isLoading)
    return (
      <div style={{ flex: 1 }}>
        <Loader />
      </div>
    );

  if (!character || !selectedId)
    return (
      <div style={{ flex: 1, color: "#fff" }}>Please select a character</div>
    );
  return (
    <div style={{ flex: 1 }}>
      <div className="character-detail">
        <img
          className="character-detail__img"
          src={character.image}
          alt={character.name}
        />
        <div className="character-detail__info">
          <h3 className="name">
            <span>{character.gender === "Male" ? "👱‍♂️" : "👱‍♀️"}</span>
            <span> {character.name}</span>
          </h3>
          <div className="info">
            <span
              className={`status ${character.status === "Dead" ? "red" : ""}`}
            ></span>
            <span> {character.status}</span>
            <span> -{character.species}</span>
          </div>
          <div className="location">
            <p>last known location:</p>
            <p>{character.location.name}</p>
          </div>
          {isFavIN ? (
            <button disabled className="btn btn--primary" style={{backgroundColor:`var(--green-600)`}}>
              Already added ✔
            </button>
          ) : (
            <button
              onClick={() => onAddFave(character)}
              className="btn btn--primary"
            >
              Add to Favorite
            </button>
          )}
        </div>
      </div>
      <div className="character-episodes">
        <div className="title">
          <h2>list of episodes</h2>
          <button>
            <ArrowUpCircleIcon className="icon" />
          </button>
        </div>
        <ul>
          {episodes.map((ep, index) => (
            <li key={ep.id}>
              <div>
                {String(index + 1).padStart(2, "0")} - {ep.episode} :{" "}
                <strong>{ep.name}</strong>
              </div>
              <div className="badge badge--secondary">{ep.air_date}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CharacterDetails;
