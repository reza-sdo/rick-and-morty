import { HeartIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Modal from "./Modal";
import { Character } from "./CharacterList";

export default function NavBar({ children }) {
  return (
    <nav className="navbar">
      <Logo />
      {/* <Search /> */}
      {children}
    </nav>
  );
}
function Logo() {
  return <div className="navbar__logo">LOGO 😍</div>;
}
export function Search({ query, setQuery }) {
  return (
    <input
      type="text"
      className="text-field"
      placeholder="Search..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
export function SearchResult({ numOfResult }) {
  return <div className="navbar__result">Found {numOfResult} character </div>;
}

export function Favorites({ fave, onRemove }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal open={open} onOpen={setOpen} title="List of favorites">
        {fave.map((f) => (
          <Character key={f.id} item={f}>
            {
              <button className="icon red" onClick={() => onRemove(f.id)}>
                <TrashIcon />
              </button>
            }
          </Character>
        ))}
      </Modal>
      <button className="heart" onClick={() => setOpen(true)}>
        <HeartIcon className="icon" />
        <span className="badge">{fave.length}</span>
      </button>
    </>
  );
}
