import { Link } from "react-router-dom";

export const Header = (): JSX.Element => {
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
    </header>
  );
};
