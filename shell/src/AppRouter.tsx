import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./AuthContext";
import { Header } from "./Header";
import { LoginPage } from "./LoginPage";
import { NotFound } from "./NotFound";
import RemoteComponent from "./RemoteComponent";

export const AppRouter = (): JSX.Element => {
  const { user } = useAuthContext();

  if (!user) {
    return <LoginPage />;
  }

  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
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
            path="/process/*"
            element={
              <RemoteComponent
                loadRemoteModule={() => import("process/bootstrap")}
                key="process-microfrontend"
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};
