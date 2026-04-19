import { LogIn } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Show, SignInButton, UserButton } from "@clerk/tanstack-react-start";

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
      <Show when={"signed-in"}>
        <UserButton />
      </Show>

      <Show when={"signed-out"}>
        <Link to="/sign-in/$" className="btn-primary">
          <LogIn size="16" />
          Sign in
        </Link>
      </Show>
    </div>
  </nav>
);

export default Navbar;
