import { EyeIcon } from "@heroicons/react/24/outline";
import {allCharacters} from "../../data/data";
function CharacterList() {
  return (
    <div className="characters-list">
      {allCharacters.map((ch) => (
        <Character key={ch.id} item={ch} />
      ))}
    </div>
  );
}

export default CharacterList;

function Character({ item }) {
  console.log(item);
  return (
    <div className="list__item">
      <img src={item.image} alt={item.name} />
      <h3 className="name">
        <span>{item.gender === "Male" ? "👱‍♂️" : "👱‍♀️"}</span>
        <span> {item.name}</span>
      </h3>
      <div className="list-item__info info">
        <span
          className={`status ${item.status === "Dead" ? "red" : ""}`}
        ></span>
        <span > {item.status}</span>
        <span> - {item.species}</span>
      </div>
      <button className="icon red">
        <EyeIcon/>
      </button>
    </div>
  );
}
