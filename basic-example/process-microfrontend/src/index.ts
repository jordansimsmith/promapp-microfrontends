import("./bootstrap").then(({ mount }) => {
  const root = document.getElementById("process-microfrontend-root");
  if (root) {
    mount(root, { id: 1, name: "Jordan Sim-Smith" }, "my access token");
  }
});
