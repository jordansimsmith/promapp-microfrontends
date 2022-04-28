import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RemoteComponent } from "./RemoteComponent";
import { useMicrofrontendRegistration } from "./useMicrofrontendRegistration";

// TODO: basename should come from host config
const isMountedInPromapp = window.location.href.includes("dev.promapp.com/paw");
const basename = isMountedInPromapp ? "/paw/app" : "/";

export const App = (): JSX.Element => {
  const { registration } = useMicrofrontendRegistration();

  if (!registration?.length) {
    return <></>;
  }

  const registeredRoutes = registration
    .map((r) => r.routes)
    .reduce((prev, curr) => ({ ...prev, ...curr }), {});

  return (
    <div>
      <h1>Shell</h1>
      <pre>{JSON.stringify(registration, null, 2)}</pre>
      <BrowserRouter basename={basename}>
        <Routes>
          {registration.map((r) => (
            <Route
              path={r.path}
              element={
                <RemoteComponent
                  registration={r}
                  registeredRoutes={registeredRoutes}
                  key={r.name}
                />
              }
              key={r.name}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};
