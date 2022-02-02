import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

export function mount(root: Element) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    root
  );
}

export function unmount(root: Element) {
  ReactDOM.unmountComponentAtNode(root);
}
