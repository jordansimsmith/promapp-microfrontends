import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import RemoteComponent from "./RemoteComponent";

const Home = (): JSX.Element => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <div style={{ background: "yellow" }}>
        <header>
          <h1>Shell app</h1>
        </header>

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

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="process"
              element={
                <RemoteComponent
                  loadRemoteModule={() => import("process/bootstrap")}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
