import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { UserContextProvider, useUserContext } from "./UserContext";

const Home = (): JSX.Element => {
  const { user } = useUserContext();

  return (
    <div>
      <h2>Process home</h2>
      <p>Hello {user.name}</p>
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

interface AppProps {
  user: IUser;
  accessToken: string;
}

const App = ({ user, accessToken }: AppProps): JSX.Element => {
  return (
    <UserContextProvider user={user} accessToken={accessToken}>
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
    </UserContextProvider>
  );
};

export default App;
