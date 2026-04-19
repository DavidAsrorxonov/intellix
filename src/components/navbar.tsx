import { LogIn } from "lucide-react";
import { Link } from "@tanstack/react-router";

const Navbar = () => (
  <nav className="navbar">
    <div className="brand">
      <div className="mark">
        <div className="glyph" />
      </div>

      <Link to="/">
        <span>Intellix</span>
      </Link>
    </div>

    <div className="actions">
      <Link to="/sign-in/$" className="btn-primary">
        <LogIn size="16" />
        Sign in
      </Link>
    </div>
  </nav>
);

export default Navbar;
