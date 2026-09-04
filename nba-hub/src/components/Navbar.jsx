import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🏀 NBA HUB
      </div>

      <div className="menu">
        <Link to="/">Início</Link>
        <Link to="/jogadores">Jogadores</Link>
      </div>
    </nav>
  );
}

export default Navbar;
