import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import RemoteComponent from "./RemoteComponent";

const App = (): JSX.Element => {
  return (
    <BrowserRouter basename="/">
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

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <RemoteComponent
                loadRemoteModule={() => import("home/bootstrap")}
                key="home-microfrontend"
              />
            }
          />
          <Route
            path="/process"
            element={
              <RemoteComponent
                loadRemoteModule={() => import("process/bootstrap")}
                key="process-microfrontend"
              />
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
