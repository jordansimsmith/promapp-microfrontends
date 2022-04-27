import("./bootstrap").then(({ mount }) => {
  const root = document.getElementById("home-microfrontend-root");
  if (root) {
    mount(root);
  }
});
