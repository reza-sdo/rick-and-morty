import { character, episodes } from "./../../data/data";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
function CharacterDetails() {
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
          <button className="btn btn--primary">Add to Favorite</button>
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
