import RemoteComponent from "./RemoteComponent";

const App = (): JSX.Element => {
  return (
    <div>
      <h1>Shell app</h1>

      <RemoteComponent loadRemoteModule={() => import("process/bootstrap")} />
    </div>
  );
};

export default App;
