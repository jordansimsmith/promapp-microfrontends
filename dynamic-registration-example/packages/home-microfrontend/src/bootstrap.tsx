import { createRoot, Root } from "react-dom/client";
import { BoostrapConfigurationProvider, IBootstrap } from "common";
import { App } from "./App";

let root: Root;

export const mount: IBootstrap["mount"] = (container, config) => {
  root = createRoot(container);
  root.render(
    <BoostrapConfigurationProvider value={config}>
      <App />
    </BoostrapConfigurationProvider>
  );
};

export const unmount: IBootstrap["unmount"] = () => {
  root?.unmount();
};
