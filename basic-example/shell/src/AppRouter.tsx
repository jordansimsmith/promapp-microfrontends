import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./AuthContext";
import { Header } from "./Header";
import { LoginPage } from "./LoginPage";
import { NotFound } from "./NotFound";
import { ProtectedRoute } from "./ProtectedRoute";
import RemoteComponent from "./RemoteComponent";

export const AppRouter = (): JSX.Element => {
  const { user } = useAuthContext();

  return (
    <>
      {user && <Header />}

      <main>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <RemoteComponent
                  loadRemoteModule={() => import("home/bootstrap")}
                  key="home-microfrontend"
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/process/*"
            element={
              <ProtectedRoute>
                <RemoteComponent
                  loadRemoteModule={() => import("process/bootstrap")}
                  key="process-microfrontend"
                />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};
