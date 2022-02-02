import React from "react";

const ProcessMicrofrontendApp = React.lazy(() => import("process/App"));

const App = (): JSX.Element => {
  return (
    <div>
      <h1>Shell app</h1>

      <React.Suspense fallback="Loading process microfrontend">
        <ProcessMicrofrontendApp />
      </React.Suspense>
    </div>
  );
};

export default App;
