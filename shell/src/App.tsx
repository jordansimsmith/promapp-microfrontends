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
      <header>
        <h1>Shell app</h1>
      </header>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/process">Process</Link>
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
    </BrowserRouter>
  );
};

export default App;
