import { useBootstrapConfiguration } from "common";

export const App = (): JSX.Element => {
  const { navigation } = useBootstrapConfiguration();
  return (
    <div>
      <h2>Home microfrontend</h2>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          navigation.navigate("PROCESS_HOME");
        }}
      >
        Process home
      </a>{" "}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          navigation.navigate("PROCESS_SINGLE_VIEW", {
            processUniqueId: "123",
          });
        }}
      >
        Process 123
      </a>
    </div>
  );
};
