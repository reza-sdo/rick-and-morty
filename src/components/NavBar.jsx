import { HeartIcon } from "@heroicons/react/24/outline";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">LOGO 😍</div>
      <input type="text" className="text-field" placeholder="Search..." />
      <div className="navbar__result">Found X character </div>
      <button className="heart">
        <HeartIcon className="icon" />
        <span className="badge">4</span>
      </button>
    </nav>
  );
}
