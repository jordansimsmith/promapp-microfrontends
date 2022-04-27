import("./bootstrap").then(({ mount }) => {
  const root = document.getElementById("home-microfrontend-root");
  if (root) {
    mount(root, { id: 1, name: "Jordan Sim-Smith" }, "my access token");
  }
});
