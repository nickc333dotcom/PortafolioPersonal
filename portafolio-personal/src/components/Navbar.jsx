import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Nicolás Correa</h2>

      <div className="nav-links">
        <Link to="/">Hoja de Vida</Link>
        <Link to="/posts">Blog</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
