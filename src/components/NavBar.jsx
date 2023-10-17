import { HeartIcon } from "@heroicons/react/24/outline";

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
export function Search({query, setQuery}) {
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
export function Favorites({fave}) {
  return (
    <button className="heart">
      <HeartIcon className="icon" />
      <span className="badge">{fave.length}</span>
    </button>
  );
}
