import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const Home = (): JSX.Element => {
  return (
    <div>
      <h2>Process home</h2>
    </div>
  );
};

const Page1 = (): JSX.Element => {
  return (
    <div>
      <h2>Process page 1</h2>
    </div>
  );
};

const Page2 = (): JSX.Element => {
  return (
    <div>
      <h2>Process page 2</h2>
    </div>
  );
};

const App = (): JSX.Element => {
  return (
    <BrowserRouter basename="/process">
      <div style={{ background: "aquamarine" }}>
        <nav>
          <ul>
            <li>
              <Link to="/">Process home</Link>
            </li>
            <li>
              <Link to="/page1">Process page 1</Link>
            </li>
            <li>
              <Link to="/page2">Process page 2</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
