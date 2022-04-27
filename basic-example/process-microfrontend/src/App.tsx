import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { ProcessPage } from "./ProcessPage";
import { UserContextProvider } from "./UserContext";

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
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:processId" element={<ProcessPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContextProvider>
  );
};

export default App;
