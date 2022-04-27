import { createRoot, Root } from "react-dom/client";

let root: Root;

export function mount(container: Element) {
  root = createRoot(container);
  root.render(<h1>Shell</h1>);
}

export function unmount() {
  root?.unmount();
}
