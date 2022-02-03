import App from "./App.svelte";

let app;

export function mount(root) {
  app = new App({
    target: root,
  });
}

export function unmount(root) {
  app?.$destroy();
}
