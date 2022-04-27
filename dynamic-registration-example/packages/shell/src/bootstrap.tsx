import { createRoot, Root } from "react-dom/client";
import { App } from "./App";

let root: Root;

export function mount(container: Element) {
  root = createRoot(container);
  root.render(<App />);
}

export function unmount() {
  root?.unmount();
}
