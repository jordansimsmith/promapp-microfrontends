import { Link } from "react-router-dom";
import { useAuthContext } from "./AuthContext";

export const Header = (): JSX.Element => {
  const { user, logout } = useAuthContext();

  return (
    <header style={{ background: "yellow" }}>
      <h1>Shell app</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/process">Process</Link>
          </li>
        </ul>
      </nav>

      <p>Hello {user?.name}</p>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </header>
  );
};
