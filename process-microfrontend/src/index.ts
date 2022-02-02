import("./bootstrap").then(({ mount }) => {
  const root = document.getElementById("process-microfrontend-root");
  if (root) {
    mount(root);
  }
});
