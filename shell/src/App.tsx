import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import { AuthContextProvider } from "./AuthContext";

const App = (): JSX.Element => {
  return (
    <BrowserRouter basename="/">
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
