import { useBootstrapConfiguration } from "common";

export const App = (): JSX.Element => {
  const { navigation } = useBootstrapConfiguration();
  return (
    <div>
      <h2>Process microfrontend</h2>

      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          navigation.navigate("HOME");
        }}
      >
        Home
      </a>
    </div>
  );
};
