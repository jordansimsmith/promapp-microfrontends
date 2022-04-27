import App from "./App.svelte";

let app;

export function mount(root, user, accessToken) {
  app = new App({
    target: root,
    props: {
      user,
      accessToken,
    },
  });
}

export function unmount(root) {
  app?.$destroy();
}
