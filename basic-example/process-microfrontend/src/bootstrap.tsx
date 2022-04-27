import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

export function mount(root: Element, user: IUser, accessToken: string) {
  ReactDOM.render(
    <React.StrictMode>
      <App user={user} accessToken={accessToken} />
    </React.StrictMode>,
    root
  );
}

export function unmount(root: Element) {
  ReactDOM.unmountComponentAtNode(root);
}
